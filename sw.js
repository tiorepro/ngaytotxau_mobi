/* Service worker — Xem Ngày Tốt Xấu (TIEN.TQN)
   Khi sửa index.html hoặc file dữ liệu .js: đổi v1 -> v2, v3... để máy đã cài nhận bản mới. */
const CACHE = 'ngay-tot-xau-v3';
const CORE = [
  './', './index.html', './manifest.webmanifest',
  './truc_info.js', './bat_tu_info.js', './can_chi_xung_data.js', './dong_cong_data.js',
  './dong_cong_2_data.js', './du_lieu_sao.js', './du_lieu_sao_xau.js', './quy_nhan_data.js',
  './GHICHU.js', './GHICHUCHOKHACH.js', './antrien.png',
  './icon-192.png', './icon-512.png', './maskable-512.png',
  './apple-touch-icon.png', './favicon-32.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(CACHE).then(cache => cache.match(req).then(hit => {
      const net = fetch(req).then(res => { cache.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    })));
    return;
  }
  if (url.origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => { const c = res.clone(); caches.open(CACHE).then(x => x.put('./index.html', c)); return res; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { const c = res.clone(); caches.open(CACHE).then(x => x.put(req, c)); return res; })));
});
