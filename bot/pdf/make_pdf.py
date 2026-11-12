#!/usr/bin/env python3
"""
make_pdf.py — Tạo file PDF báo cáo bằng CHÍNH app "Xem Ngày Tốt Xấu" (index.html) rồi gửi qua Telegram.

Cách hoạt động: mở app bằng trình duyệt ẩn (Chromium), nhập năm sinh/năm xem/kinh độ, để app tự tính,
tick sẵn các ngày–giờ–khắc mà bot đã chọn, mở khung "Xuất kết quả" của app và in ra PDF.
=> File PDF giống hệt khi bạn bấm Xuất kết quả trong app. Nếu có 2 tuổi, tạo từng bản rồi ghép chung 1 file.

Dữ liệu yêu cầu đọc từ file sự kiện GitHub (GITHUB_EVENT_PATH) — nội dung KHÔNG bị in ra nhật ký.
Biến môi trường:  TELEGRAM_TOKEN (OWNER_ID không còn bắt buộc)
Chạy thử (không gửi Telegram):  python bot/pdf/make_pdf.py --payload p.json --out ra/ --dry
"""
import argparse, functools, http.server, io, json, os, re, socketserver, sys, threading, unicodedata
from pathlib import Path

ap = argparse.ArgumentParser()
ap.add_argument('--payload', help='file JSON payload (mặc định đọc biến môi trường PAYLOAD)')
ap.add_argument('--root', default=os.environ.get('REPO_ROOT', '.'), help='thư mục chứa index.html')
ap.add_argument('--out', default='out', help='thư mục lưu PDF')
ap.add_argument('--dry', action='store_true', help='không gửi Telegram')
args = ap.parse_args()

ROOT = Path(args.root).resolve()
OUT = Path(args.out); OUT.mkdir(parents=True, exist_ok=True)
def load_payload():
    # Ưu tiên: --payload file → biến PAYLOAD → file sự kiện của GitHub (không bị in ra nhật ký Actions)
    if args.payload:
        return json.loads(Path(args.payload).read_text(encoding='utf-8'))
    if os.environ.get('PAYLOAD'):
        return json.loads(os.environ['PAYLOAD'])
    ev = os.environ.get('GITHUB_EVENT_PATH')
    if ev and Path(ev).exists():
        return json.loads(Path(ev).read_text(encoding='utf-8'))['client_payload']
    sys.exit('Không có dữ liệu yêu cầu (payload)')


payload = load_payload()

TOKEN = os.environ.get('TELEGRAM_TOKEN', '')
OWNER = os.environ.get('OWNER_ID', '')
CHAT = payload['chat_id']
# Ghi chú: yêu cầu chỉ đến được đây khi có token GitHub của chủ bot (lưu kín trong Apps Script),
# nên không cần chặn theo chat_id — bot dùng chung quy trình này để gửi PDF cho cả khách.
if not str(CHAT).lstrip('-').isdigit():
    sys.exit('chat_id không hợp lệ')


def slug(s):
    s = unicodedata.normalize('NFD', s).encode('ascii', 'ignore').decode()
    return re.sub(r'[^A-Za-z0-9]+', '-', s).strip('-')


def tg(method, **kw):
    import requests
    r = requests.post(f'https://api.telegram.org/bot{TOKEN}/{method}', timeout=120, **kw)
    return r.json()


def start_server():
    class Q(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a): pass
    handler = functools.partial(Q, directory=str(ROOT))
    srv = socketserver.TCPServer(('127.0.0.1', 0), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv, srv.server_address[1]


def make_one(browser, port, birth):
    sel = payload['selection']
    ctx = browser.new_context(viewport={'width': 900, 'height': 1200}, service_workers='block', locale='vi-VN')
    page = ctx.new_page()
    page.route('**/nominatim.openstreetmap.org/**', lambda r: r.abort())      # kinh độ do bot cấp, không tra mạng
    page.goto(f'http://127.0.0.1:{port}/index.html', wait_until='load')
    idle = "document.getElementById('loading-overlay').style.display==='none'"
    page.wait_for_function(idle, timeout=90000)
    page.evaluate("lng => { window.getLongitude = async () => lng; }", float(payload['lng']))
    page.evaluate("""([b, y, loc]) => {
        document.getElementById('birth-year').value = String(b);
        document.getElementById('view-year').value = String(y);
        document.getElementById('location-check').value = loc;
    }""", [birth, payload['view_year'], payload['location']])
    page.evaluate("calculateYearDataset()")
    page.wait_for_function(idle, timeout=90000)
    info = page.evaluate("""(sel) => {
        SELECTED_ITEMS = {days: {}, hours: {}, khacs: {}};
        sel.days.forEach(j => SELECTED_ITEMS.days[j] = true);
        sel.hours.forEach(k => SELECTED_ITEMS.hours[k] = true);
        sel.khacs.forEach(k => SELECTED_ITEMS.khacs[k] = true);
        showExportModal();
        return {blocks: document.querySelectorAll('.export-day-block').length,
                known: sel.days.filter(j => ALL_DAYS_DATA.some(d => d.jdn === j)).length};
    }""", sel)
    if info['blocks'] != len(set(sel['days'])) or info['known'] != len(set(sel['days'])):
        raise RuntimeError(f"Số ngày trong PDF ({info['blocks']}) không khớp danh sách bot gửi ({len(set(sel['days']))})")
    page.wait_for_timeout(600)          # chờ font & ấn triện tải xong
    page.emulate_media(media='print')
    pdf = page.pdf(format='A4', print_background=True, margin={'top': '10mm', 'bottom': '10mm', 'left': '0', 'right': '0'})
    ctx.close()
    return pdf


def main():
    from playwright.sync_api import sync_playwright
    from pypdf import PdfReader, PdfWriter
    srv, port = start_server()
    parts = []
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(args=['--no-sandbox'])
            for b in payload['births']:
                parts.append(make_one(browser, port, b))
            browser.close()
    finally:
        srv.shutdown()
    if len(parts) == 1:
        data = parts[0]
    else:
        w = PdfWriter()
        for blob in parts:
            for pg in PdfReader(io.BytesIO(blob)).pages:
                w.add_page(pg)
        buf = io.BytesIO(); w.write(buf); data = buf.getvalue()
    name = f"XEM-NGAY-TOT-XAU_{payload['view_year']}_{'-'.join(map(str, payload['births']))}_{slug(payload.get('viec', ''))}.pdf"
    path = OUT / name
    path.write_bytes(data)
    n_days = len(set(payload['selection']['days']))
    if args.dry:
        print(f'Đã tạo {path} ({len(data)//1024} KB, {n_days} ngày, {len(parts)} bản)')
    else:
        print(f'Đã tạo PDF ({len(data)//1024} KB)')   # không in tên file/năm sinh vì nhật ký Actions có thể công khai
    if args.dry:
        return
    cap = (f"📄 <b>Báo cáo xem ngày giờ tốt</b>\nViệc: {payload.get('viec','')}\nNăm xem: {payload['view_year']} · Gia chủ: {', '.join(map(str, payload['births']))}\n"
           f"Địa điểm: {payload['location']} · {n_days} ngày được chọn")
    with open(path, 'rb') as f:
        r = tg('sendDocument', data={'chat_id': CHAT, 'caption': cap, 'parse_mode': 'HTML'}, files={'document': (name, f, 'application/pdf')})
    if not r.get('ok'):
        raise RuntimeError('Telegram từ chối file: ' + json.dumps(r, ensure_ascii=False)[:300])
    print('Đã gửi Telegram.')
    for line in payload.get('farewell') or []:                 # lời chào kết gửi sau khi đã có file
        tg('sendMessage', json={'chat_id': CHAT, 'text': str(line)})


if __name__ == '__main__':
    try:
        main()
    except Exception as e:                      # báo lỗi cho người dùng rồi thoát mã lỗi
        print('LỖI:', e, file=sys.stderr)
        if TOKEN and not args.dry:
            try: tg('sendMessage', json={'chat_id': CHAT, 'text': '❌ Không tạo được PDF: ' + str(e)[:300] + '\nBạn thử nhắn "xuất pdf" lại sau ít phút.'})
            except Exception: pass
        sys.exit(1)
