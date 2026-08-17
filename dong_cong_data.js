const DONG_CONG_DATA = {
    "Giáp Tý": {
        "KHAI": { "rating": "XẤU", "text": "Giáp Tý kim tự chết. Không nên khởi tạo, hôn nhân." },
        "NGUY": { "rating": "XẤU", "text": "Giáp Tý (Sát tứ phế) rất xấu." },
        "CHẤP": { "rating": "XẤU", "text": "Giáp Tý (chính tứ phế) kị dùng." },
        "MÃN": { "rating": "BÌNH", "text": "Giáp Tý có thể dùng." },
        "TRỪ": { "rating": "BÌNH", "text": "Duy Giáp Tý là Thiên xá, dùng không hại." },
        "KIẾN": { "rating": "XẤU", "text": "Giáp Tý bị Nguyệt kiến xung phá, xấu." },
        "BẾ": { "rating": "BÌNH", "text": "Giáp Tý việc nhỏ có thể sửa, việc lớn thì xấu." }
    },
    "Bính Tý": {
        "KHAI": { "rating": "TỐT", "text": "Bính Tý dùng rất tốt, được nhiều của, quý nhân tiếp dẫn." },
        "NGUY": { "rating": "TỐT", "text": "Bính Tý dùng tốt cho khởi tạo, hôn nhân, động thổ." },
        "CHẤP": { "rating": "TỐT", "text": "Bính Tý lợi khởi tạo, xuất hành." },
        "ĐỊNH": { "rating": "TỐT", "text": "Bính Tý rất tốt cho tu tạo, an táng, nhập trạch." },
        "BÌNH": { "rating": "TỐT", "text": "Bính Tý rất tốt cho khởi tạo, giá thú." },
        "MÃN": { "rating": "TỐT", "text": "Bính Tý rất tốt." },
        "KIẾN": { "rating": "XẤU", "text": "Bính Tý bị Nguyệt kiến xung phá, xấu." },
        "BẾ": { "rating": "XẤU", "text": "Bính Tý Thiên địa chuyển sát, xấu." }
    },
    "Mậu Tý": {
        "KHAI": { "rating": "TỐT", "text": "Mậu Tý dùng rất tốt, được nhiều của, quý nhân tiếp dẫn." },
        "NGUY": { "rating": "TỐT", "text": "Mậu Tý dùng tốt cho khởi tạo, hôn nhân, động thổ." },
        "CHẤP": { "rating": "BÌNH", "text": "Mậu Tý tốt vừa." },
        "BÌNH": { "rating": "TỐT", "text": "Mậu Tý rất tốt cho khởi tạo, giá thú." },
        "BẾ": { "rating": "BÌNH", "text": "Mậu Tý việc nhỏ có thể sửa, việc lớn thì xấu." }
    },
    "Canh Tý": {
        "KHAI": { "rating": "TỐT", "text": "Canh Tý dùng rất tốt, được nhiều của, quý nhân tiếp dẫn." },
        "NGUY": { "rating": "TỐT", "text": "Canh Tý dùng tốt cho khởi tạo, hôn nhân, động thổ." },
        "CHẤP": { "rating": "TỐT", "text": "Canh Tý lợi khởi tạo, xuất hành." },
        "BÌNH": { "rating": "TỐT", "text": "Canh Tý rất tốt cho khởi tạo, giá thú." },
        "BẾ": { "rating": "XẤU", "text": "Canh Tý Thiên địa chuyển sát, xấu." }
    },
    "Nhâm Tý": {
        "KHAI": { "rating": "XẤU", "text": "Nhâm Tý mộc đã bảo bình chung, không nên khởi tạo, hôn nhân." },
        "THÂU": { "text": "" },
        "THÀNH": { "rating": "XẤU", "text": "Nhâm Tý tuy có đức nhưng ngũ hành không khí, khai trương, xuất hành sẽ xấu. Chỉ mưu trù nho nhỏ thì có thể." },
        "NGUY": { "rating": "XẤU", "text": "Nhâm Tý (Sát tứ phế) rất xấu." },
        "PHÁ": { "rating": "XẤU", "text": "Nhâm Tý chính tứ phế, rất xấu." },
        "CHẤP": { "rating": "XẤU", "text": "Nhâm Tý (chính tứ phế) kị dùng." },
        "BÌNH": { "rating": "XẤU", "text": "Nhâm Tý không thể dùng." },
        "MÃN": { "rating": "XẤU", "text": "Nhâm Tý không nên dùng." },
        "BẾ": { "rating": "XẤU", "text": "Nhâm Tý Thiên địa chuyển sát, xấu." }
    },
    "Ất Sửu": {
        "ĐỊNH": { "rating": "BÌNH", "text": "Ất Sửu tốt vừa." },
        "TRỪ": { "rating": "TỐT", "text": "Ất Sửu tốt." },
        "KIẾN": { "rating": "BÌNH", "text": "Ất Sửu tốt vừa." }
    },
    "Đinh Sửu": {
        "KHAI": { "rating": "XẤU", "text": "Đinh Sửu là sát nhập trung cung càng xấu." },
        "THÂU": { "rating": "XẤU", "text": "Đinh Sửu sát nhập trung cung, xấu." },
        "THÀNH": { "rating": "XẤU", "text": "Đinh Sửu là Sát nhập trung cung, càng xấu." },
        "NGUY": { "rating": "XẤU", "text": "Đinh Sửu không nên giá thú, tạo tác." },
        "PHÁ": { "rating": "XẤU", "text": "Đinh Sửu là Sát nhập trung cung, xấu không thể nói." },
        "CHẤP": { "rating": "XẤU", "text": "Đinh Sửu là Sát nhập trung cung, không thể dùng." },
        "ĐỊNH": { "rating": "BÌNH", "text": "Đinh Sửu tốt vừa. (Có thuyết nói xấu vì Sát nhập trung cung)." },
        "BÌNH": { "rating": "XẤU", "text": "Đinh Sửu Sát nhập trung cung, càng xấu." },
        "MÃN": { "rating": "XẤU", "text": "Đinh Sửu Sát nhập trung cung, hại nhân đinh." },
        "KIẾN": { "rating": "XẤU", "text": "Đinh Sửu Sát nhập trung cung, xấu." }
    },
    "Kỷ Sửu": {
        "ĐỊNH": { "rating": "XẤU", "text": "Kỷ Sửu bất lợi." },
        "KIẾN": { "rating": "BÌNH", "text": "Kỷ Sửu tốt vừa." }
    },
    "Tân Sửu": {
        "ĐỊNH": { "rating": "BÌNH", "text": "Tân Sửu tốt vừa." }
    },
    "Quý Sửu": {
        "ĐỊNH": { "rating": "BÌNH", "text": "Quý Sửu tốt vừa." },
        "KHAI": { "rating": "XẤU", "text": "Quý Sửu là sát nhập trung cung càng xấu." },
        "THÂU": { "rating": "XẤU", "text": "Quý Sửu sát nhập trung cung, xấu." },
        "THÀNH": { "rating": "XẤU", "text": "Quý Sửu là Sát nhập trung cung, càng xấu." },
        "NGUY": { "rating": "XẤU", "text": "Quý Sửu không nên giá thú, tạo tác." },
        "PHÁ": { "rating": "XẤU", "text": "Quý Sửu là Sát nhập trung cung, xấu không thể nói." },
        "CHẤP": { "rating": "XẤU", "text": "Quý Sửu là Sát nhập trung cung, không thể dùng." },
        "BÌNH": { "rating": "XẤU", "text": "Quý Sửu Sát nhập trung cung, càng xấu." },
        "MÃN": { "rating": "XẤU", "text": "Quý Sửu Sát nhập trung cung, hại nhân đinh." },
        "KIẾN": { "rating": "XẤU", "text": "Quý Sửu Sát nhập trung cung, xấu." }
    },
    "Giáp Dần": {
        "THÀNH": { "rating": "TỐT", "text": "Giáp Dần rất tốt cho hưng công, nhập trạch." },
        "NGUY": { "rating": "TỐT", "text": "Giáp Dần rất tốt cho khai sơn, mai táng, trăm việc (nhưng kị đi xa, hôn nhân)." },
        "PHÁ": { "rating": "XẤU", "text": "Giáp Dần chính tứ phế." },
        "CHẤP": { "rating": "XẤU", "text": "Giáp Dần chính tứ phế, xấu." },
        "ĐỊNH": { "rating": "XẤU", "text": "Giáp Dần chính tứ phế, xấu." },
        "BÌNH": { "rating": "TỐT", "text": "Giáp Dần tốt trên hết." },
        "MÃN": { "rating": "BÌNH", "text": "Giáp Dần tốt vừa." },
        "TRỪ": { "rating": "TỐT", "text": "Giáp Dần trăm việc thuận lợi, rất tốt." }
    },
    "Bính Dần": {
        "THÀNH": { "rating": "TỐT", "text": "Bính Dần (Thiên nguyệt đức) rất tốt cho hưng công, nhập trạch." },
        "PHÁ": { "rating": "XẤU", "text": "Bính Dần không tốt." },
        "ĐỊNH": { "rating": "TỐT", "text": "Bính Dần rất tốt." },
        "MÃN": { "rating": "BÌNH", "text": "Bính Dần tốt vừa." },
        "TRỪ": { "rating": "TỐT", "text": "Bính Dần trăm việc thuận lợi, rất tốt." }
    },
    "Mậu Dần": {
        "KHAI": { "rating": "TỐT", "text": "Mậu Dần là Thiên xá dùng tốt." },
        "THÀNH": { "rating": "TỐT", "text": "Mậu Dần rất tốt cho hưng công, nhập trạch." },
        "PHÁ": { "rating": "XẤU", "text": "Mậu Dần không tốt." },
        "ĐỊNH": { "rating": "TỐT", "text": "Mậu Dần rất tốt." },
        "MÃN": { "rating": "TỐT", "text": "Mậu Dần tốt trên hết." },
        "TRỪ": { "rating": "BÌNH", "text": "Mậu Dần tốt vừa." }
    },
    "Canh Dần": {
        "THÀNH": { "rating": "TỐT", "text": "Canh Dần rất tốt cho hưng công, nhập trạch." },
        "PHÁ": { "rating": "XẤU", "text": "Canh Dần không tốt." },
        "CHẤP": { "rating": "TỐT", "text": "Canh Dần rất tốt." },
        "ĐỊNH": { "rating": "TỐT", "text": "Canh Dần rất tốt." },
        "BÌNH": { "rating": "BÌNH", "text": "Canh Dần tốt vừa." },
        "MÃN": { "rating": "BÌNH", "text": "Canh Dần tốt vừa." },
        "TRỪ": { "rating": "TỐT", "text": "Canh Dần trăm việc thuận lợi, rất tốt." }
    },
    "Nhâm Dần": {
        "KHAI": { "rating": "TỐT", "text": "Nhâm Dần có Thiên nguyệt đức, tốt cho mai táng, sinh cơ." },
        "THÀNH": { "rating": "BÌNH", "text": "Nhâm Dần tốt vừa." },
        "PHÁ": { "rating": "BÌNH", "text": "Nhâm Dần chỉ lợi an táng." },
        "ĐỊNH": { "rating": "BÌNH", "text": "Nhâm Dần phạm Nguyệt yếm (nhưng sách nói 3 ngày Bính/Mậu/Canh dù phạm vẫn rất tốt)." },
        "BÌNH": { "rating": "BÌNH", "text": "Nhâm Dần tốt vừa." },
        "MÃN": { "rating": "TỐT", "text": "Nhâm Dần tốt trên hết." },
        "TRỪ": { "rating": "TỐT", "text": "Nhâm Dần trăm việc thuận lợi, rất tốt." }
    },
    "Ất Mão": {
        "KHAI": { "rating": "TỐT", "text": "Ất Mão xuất hành, hôn giá, tạo tác, khai trương đều rất tốt." },
        "THÀNH": { "rating": "TỐT", "text": "Ất Mão lợi nhập trạch, hôn nhân, rất tốt." },
        "NGUY": { "rating": "XẤU", "text": "Ất Mão chính tứ phế, xấu." },
        "PHÁ": { "rating": "BÌNH", "text": "Ất Mão tốt vừa. Ất Mão chính tứ phế cũng xấu." },
        "CHẤP": { "rating": "XẤU", "text": "Ất Mão chính tứ phế, xấu." },
        "ĐỊNH": { "rating": "TỐT", "text": "Ất Mão tốt." },
        "BÌNH": { "rating": "BÌNH", "text": "Duy Ất Mão tốt vừa." }
    },
    "Đinh Mão": {
        "NGUY": { "rating": "TỐT", "text": "Đinh Mão rất tốt cho khởi tạo, hôn nhân." }
    },
    "Kỷ Mão": {
        "NGUY": { "rating": "BÌNH", "text": "Kỷ Mão tốt vừa." },
        "CHẤP": { "rating": "TỐT", "text": "Kỷ Mão rất tốt." },
        "ĐỊNH": { "rating": "TỐT", "text": "Kỷ Mão tốt." }
    },
    "Tân Mão": {
        "KHAI": { "rating": "TỐT", "text": "Tân Mão xuất hành, hôn giá, tạo tác, khai trương đều rất tốt." },
        "THÀNH": { "rating": "TỐT", "text": "Tân Mão lợi nhập trạch, hôn nhân, rất tốt." },
        "NGUY": { "rating": "BÌNH", "text": "Tân Mão tốt vừa." },
        "CHẤP": { "rating": "TỐT", "text": "Tân Mão rất tốt." },
        "ĐỊNH": { "rating": "TỐT", "text": "Tân Mão tốt." },
        "BÌNH": { "rating": "XẤU", "text": "Tân Mão xấu." },
        "MÃN": { "rating": "BÌNH", "text": "Duy Tân Mão tạo tác tốt vừa." }
    },
    "Quý Mão": {
        "KHAI": { "rating": "TỐT", "text": "Quý Mão xuất hành, hôn giá, tạo tác, khai trương đều rất tốt." },
        "NGUY": { "rating": "TỐT", "text": "Quý Mão rất tốt cho khởi tạo, hôn nhân." },
        "PHÁ": { "rating": "BÌNH", "text": "Quý Mão tốt vừa." }
    },
    "Giáp Thìn": {
        "MÃN": { "rating": "XẤU", "text": "Giáp Thìn là sát tập trung, trăm việc đều kị, rất hung." },
        "TRỪ": { "rating": "XẤU", "text": "Giáp Thìn sát tập trung cung càng xấu." },
        "KIẾN": { "rating": "XẤU", "text": "Giáp Thìn là Sát nhập trung cung, càng xấu." },
        "BẾ": { "rating": "XẤU", "text": "Giáp Thìn là Sát nhập trung cung, không lợi tu tạo, an táng." },
        "KHAI": { "rating": "XẤU", "text": "Giáp Thìn là Sát tập trung cung, rất xấu." },
        "THÂU": { "rating": "BÌNH", "text": "Giáp Thìn tốt vừa, lợi sửa sang, an táng." },
        "THÀNH": { "rating": "XẤU", "text": "Giáp Thìn là Bạch hổ nhập trung cung, xấu." },
        "NGUY": { "rating": "XẤU", "text": "Giáp Thìn Sát nhập trung cung, rất xấu." },
        "PHÁ": { "rating": "XẤU", "text": "Giáp Thìn Sát nhập trung cung, rất xấu." },
        "CHẤP": { "rating": "BÌNH", "text": "Giáp Thìn chỉ sửa trộm." }
    },
    "Bính Thìn": {
        "BẾ": { "rating": "BÌNH", "text": "Bính Thìn mưu trù nhỏ được, kị khởi tạo, hôn nhân." },
        "KHAI": { "rating": "TỐT", "text": "Bính Thìn trăm việc rất tốt." },
        "THÂU": { "rating": "BÌNH", "text": "Bính Thìn tốt vừa, lợi sửa sang, an táng." },
        "THÀNH": { "rating": "BÌNH", "text": "Bính Thìn là ba ngày táng, tốt vừa." },
        "NGUY": { "rating": "TỐT", "text": "Bính Thìn rất tốt." },
        "CHẤP": { "rating": "BÌNH", "text": "Bính Thìn an táng tốt vừa." }
    },
    "Mậu Thìn": {
        "MÃN": { "rating": "XẤU", "text": "Mậu Thìn là sát tập trung, trăm việc đều kị, rất hung." },
        "TRỪ": { "rating": "XẤU", "text": "Mậu Thìn sát tập trung cung càng xấu." },
        "KIẾN": { "rating": "XẤU", "text": "Mậu Thìn là Sát nhập trung cung, càng xấu." },
        "BẾ": { "rating": "XẤU", "text": "Mậu Thìn là Sát nhập trung cung, không lợi tu tạo, an táng." },
        "KHAI": { "rating": "XẤU", "text": "Mậu Thìn là Sát tập trung cung, rất xấu." },
        "THÂU": { "rating": "XẤU", "text": "Mậu Thìn không tốt." },
        "THÀNH": { "rating": "XẤU", "text": "Mậu Thìn là Bạch hổ nhập trung cung, xấu." },
        "NGUY": { "rating": "XẤU", "text": "Mậu Thìn không tốt." },
        "PHÁ": { "rating": "XẤU", "text": "Mậu Thìn Sát nhập trung cung, rất xấu." },
        "CHẤP": { "rating": "XẤU", "text": "Mậu Thìn Sát nhập trung cung, rất xấu." },
        "BÌNH": { "rating": "XẤU", "text": "Mậu Thìn Sát nhập trung cung, xấu." }
    },
    "Canh Thìn": {
        "BẾ": { "rating": "XẤU", "text": "Canh Thìn thiên địa chuyển sát." },
        "KHAI": { "rating": "TỐT", "text": "Canh Thìn trăm việc rất tốt." },
        "THÂU": { "rating": "XẤU", "text": "Canh Thìn không tốt." },
        "THÀNH": { "rating": "BÌNH", "text": "Canh Thìn là ba ngày táng, tốt vừa." },
        "NGUY": { "rating": "XẤU", "text": "Canh Thìn không tốt." },
        "BÌNH": { "rating": "BÌNH", "text": "Canh Thìn làm nhỏ cũng tốt vừa." }
    },
    "Nhâm Thìn": {
        "BẾ": { "rating": "BÌNH", "text": "Nhâm Thìn mưu trù nhỏ được, kị khởi tạo, hôn nhân." },
        "KHAI": { "rating": "TỐT", "text": "Nhâm Thìn trăm việc rất tốt." },
        "THÂU": { "rating": "BÌNH", "text": "Nhâm Thìn tốt vừa, lợi sửa sang, an táng." },
        "THÀNH": { "rating": "BÌNH", "text": "Nhâm Thìn là ba ngày táng, tốt vừa." },
        "NGUY": { "rating": "TỐT", "text": "Nhâm Thìn nước trong sạch." },
        "ĐỊNH": { "rating": "BÌNH", "text": "Duy Nhâm Thìn chỉ nên an táng, giá thú." },
        "BÌNH": { "rating": "BÌNH", "text": "Nhâm Thìn tốt vừa." }
    },
    "Ất Tị": {
        "TRỪ": { "rating": "XẤU", "text": "Ất Tị không nên dùng." },
        "BẾ": { "rating": "TỐT", "text": "Ất Tị hưng công, hôn nhân, khai trương rất tốt." },
        "KHAI": { "rating": "BÌNH", "text": "Ất Tị tốt vừa." },
        "NGUY": { "rating": "TỐT", "text": "Ất Tị rất tốt." },
        "THÀNH": { "rating": "TỐT", "text": "Ất Tị rất tốt." },
        "PHÁ": { "rating": "BÌNH", "text": "Duy Ất Tị tốt vừa." },
        "CHẤP": { "rating": "TỐT", "text": "Ất Tị rất tốt." }
    },
    "Đinh Tị": {
        "TRỪ": { "rating": "TỐT", "text": "Đinh Tị nên tu tạo, nhập trạch, hôn nhân (rất tốt)." },
        "PHÁ": { "rating": "XẤU", "text": "Đinh Tị chính tứ phế, xấu." },
        "CHẤP": { "rating": "XẤU", "text": "Đinh Tị chính tứ phế, xấu." },
        "ĐỊNH": { "rating": "XẤU", "text": "Đinh Tị Chính tứ phế, xấu." }
    },
    "Kỷ Tị": {
        "TRỪ": { "rating": "BÌNH", "text": "Kỷ Tị tạo tác tốt, kị mai táng." },
        "THÀNH": { "rating": "TỐT", "text": "Kỷ Tị rất tốt." },
        "CHẤP": { "rating": "TỐT", "text": "Kỷ Tị rất tốt." }
    },
    "Tân Tị": {
        "TRỪ": { "rating": "XẤU", "text": "Tân Tị không nên dùng." },
        "BẾ": { "rating": "TỐT", "text": "Tân Tị hưng công, hôn nhân, khai trương rất tốt." },
        "CHẤP": { "rating": "BÌNH", "text": "Tân Tị tốt vừa." }
    },
    "Quý Tị": {
        "TRỪ": { "rating": "XẤU", "text": "Quý Tị không nên dùng." },
        "KHAI": { "rating": "BÌNH", "text": "Quý Tị tốt vừa." },
        "CHẤP": { "rating": "TỐT", "text": "Quý Tị rất tốt." },
        "ĐỊNH": { "rating": "BÌNH", "text": "Quý Tị khai sơn, an táng tốt vừa; kị hôn nhân, nhập trạch." }
    },
    "Giáp Ngọ": {
        "MÃN": { "rating": "XẤU", "text": "Giáp Ngọ không nên dùng." },
        "TRỪ": { "rating": "TỐT", "text": "Giáp Ngọ tốt cho tu tạo, hôn nhân, khai trương." },
        "KIẾN": { "rating": "BÌNH", "text": "Giáp Ngọ Thiên xá, tốt vừa." },
        "BẾ": { "rating": "BÌNH", "text": "Giáp Ngọ chỉ dùng việc nhỏ hoặc an táng là tốt vừa." },
        "NGUY": { "rating": "TỐT", "text": "Giáp Ngọ rất tốt." }
    },
    "Bính Ngọ": {
        "MÃN": { "rating": "BÌNH", "text": "Bính Ngọ bình thường." },
        "TRỪ": { "rating": "XẤU", "text": "Bính Ngọ là thiên địa chuyển sát, xấu." },
        "BẾ": { "rating": "BÌNH", "text": "Bính Ngọ chỉ dùng việc nhỏ hoặc an táng là tốt vừa." },
        "KHAI": { "rating": "TỐT", "text": "Bính Ngọ rất tốt cho giá thú, tu tạo, an táng." },
        "THÂU": { "rating": "BÌNH", "text": "Bính Ngọ tốt vừa nhưng phạm thì xấu." },
        "THÀNH": { "rating": "TỐT", "text": "Bính Ngọ rất tốt." },
        "NGUY": { "rating": "XẤU", "text": "Bính Ngọ chính tứ phế, xấu." },
        "PHÁ": { "rating": "XẤU", "text": "Bính Ngọ chính tứ phế, xấu." },
        "CHẤP": { "rating": "XẤU", "text": "Bính Ngọ chính tứ phế, xấu." }
    },
    "Mậu Ngọ": {
        "MÃN": { "rating": "XẤU", "text": "Mậu Ngọ không nên dùng." },
        "TRỪ": { "rating": "XẤU", "text": "Mậu Ngọ là thiên địa chuyển sát, xấu." },
        "BẾ": { "rating": "XẤU", "text": "Mậu Ngọ trùng tang, không thể dùng." },
        "KHAI": { "rating": "TỐT", "text": "Mậu Ngọ rất tốt cho giá thú, tu tạo, an táng." },
        "THÂU": { "rating": "XẤU", "text": "Mậu Ngọ bất lợi." }
    },
    "Canh Ngọ": {
        "MÃN": { "rating": "XẤU", "text": "Canh Ngọ không nên dùng." },
        "TRỪ": { "rating": "TỐT", "text": "Canh Ngọ tốt cho tu tạo, hôn nhân, khai trương." },
        "BẾ": { "rating": "BÌNH", "text": "Canh Ngọ chỉ dùng việc nhỏ hoặc an táng là tốt vừa." },
        "KHAI": { "rating": "XẤU", "text": "Canh Ngọ rất xấu." },
        "THÂU": { "rating": "XẤU", "text": "Canh Ngọ bất lợi." },
        "CHẤP": { "rating": "TỐT", "text": "Canh Ngọ rất tốt." }
    },
    "Nhâm Ngọ": {
        "MÃN": { "rating": "BÌNH", "text": "Nhâm Ngọ có Thiên đức, Nguyệt đức dùng tốt vừa." },
        "TRỪ": { "rating": "TỐT", "text": "Nhâm Ngọ tốt cho tu tạo, hôn nhân, khai trương." },
        "BẾ": { "rating": "BÌNH", "text": "Nhâm Ngọ chỉ dùng việc nhỏ hoặc an táng là tốt vừa." },
        "KHAI": { "rating": "TỐT", "text": "Nhâm Ngọ rất tốt cho giá thú, tu tạo, an táng." },
        "THÂU": { "rating": "BÌNH", "text": "Nhâm Ngọ tốt vừa." },
        "PHÁ": { "rating": "BÌNH", "text": "Nhâm Ngọ dùng nho nhỏ thì được." },
        "CHẤP": { "rating": "TỐT", "text": "Nhâm Ngọ rất tốt." }
    },
    "Ất Mùi": {
        "CHẤP": { "rating": "XẤU", "text": "Ất Mùi sát tập trung cung càng kị khởi tạo, nhập trạch, hôn nhân, khai trương." },
        "ĐỊNH": { "rating": "XẤU", "text": "Ất Mùi là Bạch hổ nhập trung cung, càng xấu." },
        "BÌNH": { "rating": "XẤU", "text": "Ất Mùi càng thêm xấu hiểm." },
        "TRỪ": { "rating": "XẤU", "text": "Duy Ất Mùi rất bất lợi." },
        "KIẾN": { "rating": "XẤU", "text": "Ất Mùi là Sát nhập trung cung, không lợi tu tạo, hôn nhân, rất xấu." },
        "BẾ": { "rating": "XẤU", "text": "Riêng Ất Mùi là Sát nhập trung cung, rất xấu." },
        "KHAI": { "rating": "XẤU", "text": "Ất Mùi trăm sự không lợi." },
        "THÂU": { "rating": "XẤU", "text": "Ất Mùi xấu." },
        "THÀNH": { "rating": "XẤU", "text": "Ất Mùi Sát nhập trung cung, kị dùng." },
        "NGUY": { "rating": "XẤU", "text": "Ất Mùi Sát nhập trung cung, càng xấu." },
        "PHÁ": { "rating": "XẤU", "text": "Ất Mùi Sát nhập trung cung, xấu." }
    },
    "Đinh Mùi": {
        "BẾ": { "rating": "BÌNH", "text": "Đinh Mùi dùng việc nhỏ tốt vừa." },
        "KHAI": { "rating": "BÌNH", "text": "Đinh Mùi tốt vừa (chỉ nên phạt cỏ, an táng)." },
        "THÂU": { "rating": "XẤU", "text": "Đinh Mùi xấu." },
        "NGUY": { "rating": "TỐT", "text": "Đinh Mùi trăm việc tốt hết." }
    },
    "Kỷ Mùi": {
        "MÃN": { "rating": "BÌNH", "text": "Kỷ Mùi tốt vừa." },
        "BẾ": { "rating": "BÌNH", "text": "Kỷ Mùi tốt vừa." },
        "KHAI": { "rating": "BÌNH", "text": "Kỷ Mùi tốt vừa (chỉ nên phạt cỏ, an táng)." },
        "NGUY": { "rating": "BÌNH", "text": "Kỷ Mùi mai táng tốt vừa." },
        "PHÁ": { "rating": "XẤU", "text": "Kỷ Mùi Sát nhập trung cung, xấu." }
    },
    "Tân Mùi": {
        "MÃN": { "rating": "BÌNH", "text": "Tân Mùi tốt vừa." },
        "BẾ": { "rating": "BÌNH", "text": "Tân Mùi dùng việc nhỏ tốt vừa." },
        "KHAI": { "rating": "BÌNH", "text": "Tân Mùi tốt vừa (chỉ nên phạt cỏ, an táng)." },
        "THÂU": { "rating": "BÌNH", "text": "Tân Mùi tốt vừa." },
        "NGUY": { "rating": "XẤU", "text": "Tân Mùi bất lợi." },
        "PHÁ": { "rating": "XẤU", "text": "Tân Mùi Sát nhập trung cung, xấu." }
    },
    "Quý Mùi": {
        "ĐỊNH": { "rating": "TỐT", "text": "Duy chỉ có ngày Quý Mùi là rất tốt, lợi người sống lâu, thêm con cháu." },
        "BẾ": { "rating": "BÌNH", "text": "Quý Mùi tốt vừa." },
        "KHAI": { "rating": "BÌNH", "text": "Quý Mùi tốt vừa (chỉ nên phạt cỏ, an táng)." },
        "THÂU": { "rating": "BÌNH", "text": "Quý Mùi tốt vừa." },
        "THÀNH": { "rating": "TỐT", "text": "Duy Quý Mùi tốt trên hết." },
        "NGUY": { "rating": "XẤU", "text": "Quý Mùi bất lợi." },
        "PHÁ": { "rating": "TỐT", "text": "Quý Mùi trăm việc rất tốt." }
    },
    "Giáp Thân": {
        "ĐỊNH": { "rating": "TỐT", "text": "Giáp Thân an táng, phá đất rất tốt." },
        "BÌNH": { "rating": "XẤU", "text": "Giáp Thân là Sát nhập trung cung, càng xấu." },
        "MÃN": { "rating": "BÌNH", "text": "Giáp Thân tốt vừa cho an táng, khởi tạo (không nên động thổ)." },
        "TRỪ": { "rating": "TỐT", "text": "Giáp Thân rất tốt cho khởi tạo, an táng." },
        "KIẾN": { "rating": "BÌNH", "text": "Giáp Thân chỉ nên mai táng." },
        "BẾ": { "rating": "BÌNH", "text": "Giáp Thân tốt vừa." },
        "KHAI": { "rating": "BÌNH", "text": "Giáp Thân tốt cho an táng (nhưng kị khởi tạo, hôn nhân)." },
        "THÂU": { "rating": "TỐT", "text": "Duy Giáp Thân lợi an táng, hôn thú, khởi tạo." },
        "THÀNH": { "rating": "TỐT", "text": "Giáp Thân rất tốt." },
        "NGUY": { "rating": "TỐT", "text": "Giáp Thân khởi tạo, an táng tốt." }
    },
    "Bính Thân": {
        "ĐỊNH": { "rating": "TỐT", "text": "Bính Thân an táng, phá đất rất tốt." },
        "MÃN": { "rating": "BÌNH", "text": "Bính Thân tốt vừa cho an táng, khởi tạo (không nên động thổ)." },
        "TRỪ": { "rating": "XẤU", "text": "Bính Thân không dùng." },
        "KIẾN": { "rating": "XẤU", "text": "Bính Thân càng xấu." },
        "BẾ": { "rating": "TỐT", "text": "Bính Thân tốt nhất (thượng cát)." },
        "THÀNH": { "rating": "XẤU", "text": "Bính Thân phạm quỷ khốc." },
        "NGUY": { "rating": "BÌNH", "text": "Bính Thân chỉ nên mai táng." }
    },
    "Mậu Thân": {
        "ĐỊNH": { "rating": "XẤU", "text": "Mậu Thân xấu." },
        "MÃN": { "rating": "BÌNH", "text": "Mậu Thân tốt vừa cho an táng, khởi tạo (không nên động thổ)." },
        "KIẾN": { "rating": "TỐT", "text": "Mậu Thân Thiên xá (?)." },
        "BẾ": { "rating": "TỐT", "text": "Mậu Thân tốt nhất (thượng cát)." },
        "KHAI": { "rating": "BÌNH", "text": "Mậu Thân tốt cho an táng (nhưng kị khởi tạo, hôn nhân)." },
        "THÀNH": { "rating": "TỐT", "text": "Mậu Thân rất tốt." }
    },
    "Canh Thân": {
        "PHÁ": { "rating": "XẤU", "text": "Canh Thân là chính tứ phế, càng xấu." },
        "CHẤP": { "rating": "XẤU", "text": "Canh Thân là Xuân chính tứ phế, trăm việc phải kiêng." },
        "ĐỊNH": { "rating": "XẤU", "text": "Canh Thân xấu." },
        "BÌNH": { "rating": "XẤU", "text": "Canh Thân là Sát nhập trung cung, càng xấu." },
        "MÃN": { "rating": "XẤU", "text": "Canh Thân không thể dùng." },
        "TRỪ": { "rating": "BÌNH", "text": "Canh Thân thận trọng." },
        "KIẾN": { "rating": "XẤU", "text": "Canh Thân Sát nhập trung cung." },
        "BẾ": { "rating": "TỐT", "text": "Canh Thân tốt nhất (thượng cát)." },
        "KHAI": { "rating": "XẤU", "text": "Canh Thân Sát nhập trung cung, rất xấu." },
        "THÂU": { "rating": "XẤU", "text": "Canh Thân Thụ tử, Sát nhập trung cung, rất xấu." },
        "THÀNH": { "rating": "BÌNH", "text": "Canh Thân chỉ nên an táng và tu tạo nhỏ, nếu làm lớn thì rất xấu." },
        "NGUY": { "rating": "BÌNH", "text": "Canh Thân tốt vừa cho việc nhỏ, an táng; kị làm lớn." }
    },
    "Nhâm Thân": {
        "ĐỊNH": { "rating": "TỐT", "text": "Nhâm Thân là ngày thập toàn rất tốt." },
        "KIẾN": { "rating": "BÌNH", "text": "Nhâm Thân chỉ nên mai táng." },
        "BẾ": { "rating": "BÌNH", "text": "Nhâm Thân tốt vừa." },
        "THÀNH": { "rating": "TỐT", "text": "Nhâm Thân rất tốt." },
        "NGUY": { "rating": "BÌNH", "text": "Nhâm Thân chỉ nên mai táng." }
    },
    "Ất Dậu": {
        "CHẤP": { "rating": "TỐT", "text": "Ất Dậu nên tu tạo, nhập trạch." },
        "MÃN": { "rating": "BÌNH", "text": "Ất Dậu tốt vừa." },
        "TRỪ": { "rating": "BÌNH", "text": "Ất Dậu tốt vừa." },
        "BẾ": { "rating": "BÌNH", "text": "Ất Dậu an táng được." },
        "KHAI": { "rating": "TỐT", "text": "Ất Dậu tốt nhất." },
        "THÀNH": { "rating": "TỐT", "text": "Ất Dậu là ngày tốt trọn vẹn." }
    },
    "Đinh Dậu": {
        "NGUY": { "rating": "TỐT", "text": "Duy có Đinh Dậu có Thiên đức, Phúc tinh nên an táng, hoàn phúc nguyện, xuất hành, khai trương; nhưng kị khởi tạo, hôn nhân." },
        "CHẤP": { "rating": "TỐT", "text": "Đinh Dậu an táng tốt." },
        "MÃN": { "rating": "XẤU", "text": "Đinh Dậu bất lợi hoặc xấu." },
        "TRỪ": { "rating": "XẤU", "text": "Đinh Dậu xấu." },
        "THÀNH": { "rating": "TỐT", "text": "Đinh Dậu mai táng tốt nhất." }
    },
    "Kỷ Dậu": {
        "MÃN": { "rating": "XẤU", "text": "Kỷ Dậu bất lợi hoặc xấu." },
        "TRỪ": { "rating": "XẤU", "text": "Kỷ Dậu xấu." },
        "BẾ": { "rating": "BÌNH", "text": "Kỷ Dậu an táng được." },
        "KHAI": { "rating": "BÌNH", "text": "Kỷ Dậu an táng được." }
    },
    "Tân Dậu": {
        "NGUY": { "rating": "XẤU", "text": "Tân Dậu bỏ không dùng." },
        "PHÁ": { "rating": "XẤU", "text": "Tân Dậu là chính tứ phế, Nguyệt phá, rất xấu." },
        "CHẤP": { "rating": "XẤU", "text": "Tân Dậu chính tứ phế không nên dùng." },
        "MÃN": { "rating": "BÌNH", "text": "Tân Dậu tốt vừa." },
        "TRỪ": { "rating": "XẤU", "text": "Tân Dậu xấu." },
        "THÀNH": { "rating": "BÌNH", "text": "Tân Dậu tốt vừa." }
    },
    "Quý Dậu": {
        "CHẤP": { "rating": "TỐT", "text": "Quý Dậu an táng tốt." },
        "MÃN": { "rating": "XẤU", "text": "Quý Dậu bất lợi hoặc xấu." },
        "TRỪ": { "rating": "XẤU", "text": "Quý Dậu xấu." },
        "THÀNH": { "rating": "TỐT", "text": "Quý Dậu là ngày tốt trọn vẹn." }
    },
    "Giáp Tuất": {
        "CHẤP": { "rating": "BÌNH", "text": "Duy Giáp Tuất mưu trù nho nhỏ là tốt vừa." },
        "ĐỊNH": { "rating": "TỐT", "text": "Giáp Tuất rất tốt cho khởi tạo, hôn nhân, an táng." },
        "BÌNH": { "rating": "BÌNH", "text": "Duy Giáp Tuất có thể dùng." },
        "TRỪ": { "rating": "BÌNH", "text": "Giáp Tuất tốt vừa." },
        "BẾ": { "rating": "TỐT", "text": "Giáp Tuất nên giá thú, khai trương (kị động thổ)." },
        "KHAI": { "rating": "BÌNH", "text": "Giáp Tuất trộm sửa có thể dùng." },
        "THÂU": { "rating": "BÌNH", "text": "Giáp Tuất trộm sửa có thể dùng." }
    },
    "Bính Tuất": {
        "THÀNH": { "rating": "XẤU", "text": "Bính Tuất sát tập trung cung, kị khởi tạo, hôn giá, nhập trạch." },
        "NGUY": { "rating": "XẤU", "text": "Bính Tuất là Sát nhập trung cung càng xấu." },
        "PHÁ": { "rating": "XẤU", "text": "Bính Tuất càng xấu." },
        "CHẤP": { "rating": "XẤU", "text": "Bính Tuất rất xấu." },
        "ĐỊNH": { "rating": "XẤU", "text": "Bính Tuất là Sát nhập trung cung, khó được ích." },
        "MÃN": { "rating": "XẤU", "text": "Bính Tuất là Sát nhập trung cung, rất xấu, kị dùng." },
        "TRỪ": { "rating": "XẤU", "text": "Bính Tuất là Sát nhập trung cung, rất xấu." },
        "KIẾN": { "rating": "TỐT", "text": "Bính Tuất rất tốt." },
        "BẾ": { "rating": "XẤU", "text": "Bính Tuất trăm việc đều xấu." },
        "KHAI": { "rating": "XẤU", "text": "Bính Tuất Sát nhập trung cung, kị dùng." },
        "THÂU": { "rating": "XẤU", "text": "Bính Tuất trăm việc đều kị." }
    },
    "Mậu Tuất": {
        "THÀNH": { "rating": "XẤU", "text": "Mậu Tuất sát tập trung cung, kị khởi tạo, hôn giá, nhập trạch." },
        "ĐỊNH": { "rating": "TỐT", "text": "Mậu Tuất rất tốt cho khởi tạo, hôn nhân, an táng." },
        "TRỪ": { "rating": "BÌNH", "text": "Mậu Tuất tốt vừa." },
        "BẾ": { "rating": "XẤU", "text": "Mậu Tuất trăm việc đều xấu." },
        "THÂU": { "rating": "XẤU", "text": "Mậu Tuất trăm việc đều kị." }
    },
    "Canh Tuất": {
        "THÀNH": { "rating": "XẤU", "text": "Canh Tuất sát tập trung cung, kị khởi tạo, hôn giá, nhập trạch." },
        "ĐỊNH": { "rating": "TỐT", "text": "Canh Tuất rất tốt cho khởi tạo, hôn nhân, an táng." },
        "TRỪ": { "rating": "BÌNH", "text": "Canh Tuất tốt vừa." },
        "THÂU": { "rating": "TỐT", "text": "Canh Tuất trước khẩu thiệt sau rất tốt." }
    },
    "Nhâm Tuất": {
        "THÀNH": { "rating": "XẤU", "text": "Nhâm Tuất sát tập trung cung, kị khởi tạo, hôn giá, nhập trạch." },
        "NGUY": { "rating": "XẤU", "text": "Nhâm Tuất là Sát nhập trung cung càng xấu." },
        "PHÁ": { "rating": "XẤU", "text": "Nhâm Tuất càng xấu." },
        "CHẤP": { "rating": "XẤU", "text": "Nhâm Tuất rất xấu." },
        "ĐỊNH": { "rating": "XẤU", "text": "Nhâm Tuất là Sát nhập trung cung, khó được ích." },
        "MÃN": { "rating": "XẤU", "text": "Nhâm Tuất là Sát nhập trung cung, rất xấu, kị dùng." },
        "TRỪ": { "rating": "XẤU", "text": "Nhâm Tuất là Sát nhập trung cung, rất xấu." },
        "KHAI": { "rating": "XẤU", "text": "Nhâm Tuất Sát nhập trung cung, kị dùng." },
        "THÂU": { "rating": "XẤU", "text": "Nhâm Tuất trăm việc đều kị." }
    },
    "Ất Hợi": {
        "NGUY": { "rating": "BÌNH", "text": "Ất Hợi tốt vừa." },
        "CHẤP": { "rating": "BÌNH", "text": "Ất Hợi tốt vừa." },
        "ĐỊNH": { "rating": "TỐT", "text": "Ất Hợi (Văn Xương) rất tốt cho xuất hành, hôn nhân, động thổ." },
        "MÃN": { "rating": "TỐT", "text": "Ất Hợi rất tốt cho khởi tạo, hôn nhân." },
        "TRỪ": { "rating": "TỐT", "text": "Ất Hợi rất tốt." },
        "KIẾN": { "rating": "BÌNH", "text": "Ất Hợi chỉ nên làm nhỏ." },
        "BẾ": { "rating": "TỐT", "text": "Ất Hợi trăm việc đều tốt." },
        "KHAI": { "rating": "TỐT", "text": "Ất Hợi đều tốt trọn vẹn." }
    },
    "Đinh Hợi": {
        "NGUY": { "rating": "XẤU", "text": "Đinh Hợi (Thụ tử) không thể dùng." },
        "CHẤP": { "rating": "BÌNH", "text": "Đinh Hợi tốt vừa." },
        "ĐỊNH": { "rating": "TỐT", "text": "Đinh Hợi rất tốt cho xuất hành, hôn nhân, động thổ." },
        "MÃN": { "rating": "TỐT", "text": "Đinh Hợi rất tốt cho khởi tạo, hôn nhân." },
        "TRỪ": { "rating": "TỐT", "text": "Đinh Hợi rất tốt." },
        "BẾ": { "rating": "BÌNH", "text": "Đinh Hợi tốt vừa." },
        "KHAI": { "rating": "TỐT", "text": "Đinh Hợi đều tốt trọn vẹn." }
    },
    "Kỷ Hợi": {
        "NGUY": { "rating": "BÌNH", "text": "Kỷ Hợi tốt vừa (lợi việc học)." },
        "CHẤP": { "rating": "BÌNH", "text": "Kỷ Hợi tốt vừa." },
        "ĐỊNH": { "rating": "TỐT", "text": "Kỷ Hợi rất tốt cho xuất hành, hôn nhân, động thổ." },
        "MÃN": { "rating": "TỐT", "text": "Kỷ Hợi rất tốt cho khởi tạo, hôn nhân." },
        "TRỪ": { "rating": "TỐT", "text": "Kỷ Hợi rất tốt." },
        "KIẾN": { "rating": "BÌNH", "text": "Kỷ Hợi chỉ nên làm nhỏ." },
        "BẾ": { "rating": "TỐT", "text": "Kỷ Hợi trăm việc đều tốt." },
        "KHAI": { "rating": "TỐT", "text": "Kỷ Hợi đều tốt trọn vẹn." }
    },
    "Tân Hợi": {
        "THÀNH": { "rating": "TỐT", "text": "Tân Hợi tốt trên hết." },
        "NGUY": { "rating": "XẤU", "text": "Tân Hợi không thể dùng." },
        "CHẤP": { "rating": "XẤU", "text": "Tân Hợi xấu." },
        "ĐỊNH": { "rating": "XẤU", "text": "Tân Hợi không nên dùng." },
        "MÃN": { "rating": "XẤU", "text": "Tân Hợi không thể dùng." },
        "TRỪ": { "rating": "XẤU", "text": "Tân Hợi không dùng." },
        "BẾ": { "rating": "XẤU", "text": "Tân Hợi không thể dùng." },
        "KHAI": { "rating": "XẤU", "text": "Tân Hợi không thể dùng." }
    },
    "Quý Hợi": {
        "THÀNH": { "rating": "TỐT", "text": "Quý Hợi tốt trên hết." },
        "NGUY": { "rating": "XẤU", "text": "Quý Hợi (Thụ tử) không thể dùng." },
        "PHÁ": { "rating": "XẤU", "text": "Quý Hợi càng xấu. Mọi việc đều kị." },
        "CHẤP": { "rating": "XẤU", "text": "Quý Hợi xấu." },
        "ĐỊNH": { "rating": "XẤU", "text": "Quý Hợi không nên dùng." },
        "MÃN": { "rating": "XẤU", "text": "Quý Hợi không thể dùng." },
        "TRỪ": { "rating": "XẤU", "text": "Quý Hợi không dùng." },
        "BẾ": { "rating": "XẤU", "text": "Quý Hợi không thể dùng." },
        "KHAI": { "rating": "XẤU", "text": "Quý Hợi không thể dùng." }
    }
};