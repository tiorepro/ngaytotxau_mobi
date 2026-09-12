const TRUC_INFO = {
  "Kiến": {
    name: "Trực Kiến (Khởi đầu)",
    rating: "Xấu (thuộc nhóm Trực Xấu)",
    nghi: "Cầu tài nhỏ, thăm hỏi, gặp gỡ, xuất hành ngắn, nộp đơn từ, nhập học (chỉ hợp việc nhỏ, không hợp việc lớn).",
    ky: "Khai trương, cưới hỏi, nhậm chức, ký kết hợp đồng lớn, động thổ, phá thổ, an táng, sửa mộ (ngày Kiến là ngày “tụ khí” của tháng, vượng quá thì hóa hư, không nên dùng cho việc trọng đại).",
    ngoaitru: "Trùng ngày Nguyệt Kiến (ngày Địa chi giống tháng) thì xấu càng thêm xấu, đặc biệt kỵ động thổ & an táng."
  },
  "Trừ": {
    name: "Trực Trừ (Tẩy uế)",
    rating: "Rất Tốt (Đại Cát – thuộc nhóm Tốt Thuần)",
    nghi: "Tắm gội, dọn nhà, chữa bệnh, cắt tóc, nhổ răng, phẫu thuật, trừ tà, xả xui, bắt trộm, ly hôn.",
    ky: "Cưới hỏi, nhậm chức lâu dài, ký hợp đồng lớn, xuất hành xa (dễ chia ly, bãi miễn).",
    ngoaitru: "Nếu gặp Thiên Đức, Nguyệt Đức, Thiên Ân thì có thể cưới hỏi (các sách đều cho phép)."
  },
  "Mãn": {
    name: "Trực Mãn (Đầy đủ)",
    rating: "Bán Cát Bán Hung (Trung Bình – thuộc nhóm Bán Cát)",
    nghi: "Khai trương, mở kho xuất hàng, thu tiền, cầu tài lộc, cúng tế, nhận người (việc vừa và nhỏ, tránh việc quá trọng đại).",
    ky: "Cưới hỏi lớn, nhậm chức, an táng, chôn cất (sợ mộ đầy nước, mục nát), kiện tụng (dây dưa), uống thuốc lâu ngày (bệnh ứ tắc).",
    ngoaitru: "Không nên cho vay tiền ngày này (khó đòi lại)."
  },
  "Bình": {
    name: "Trực Bình (Bình hòa)",
    rating: "Bán Cát Bán Hung (Trung Bình – thuộc nhóm Bán Cát)",
    nghi: "Định việc, ký kết hợp đồng bình đẳng, tu sửa nhà cửa, dựng cột, làm đường, di chuyển, hòa giải, nhập trạch nhẹ.",
    ky: "Đào giếng, đào mương, trổ cửa thông (phá vỡ sự bình), kiện tụng (hòa thì không thắng).",
    ngoaitru: "Gặp Chu Tước, Bạch Hổ thì kỵ tranh cãi, cưới xin."
  },
  "Định": {
    name: "Trực Định (Yên định)",
    rating: "Rất Tốt (Đại Cát – thuộc nhóm Tốt Thuần)",
    nghi: "Cưới hỏi, động thổ, đổ mái, nhập trạch, nhậm chức lâu dài, ký hợp đồng lớn, kết nghĩa anh em, chăn nuôi.",
    ky: "Xuất hành xa, thưa kiện, cầu y (việc gì cũng “định” không chuyển động).",
    ngoaitru: "Đặc biệt kỵ đi thuyền, vượt suối ngày Định (dễ bị “đóng băng” giữa đường)."
  },
  "Chấp": {
    name: "Trực Chấp (Nắm giữ)",
    rating: "Bán Cát Bán Hung (Trung Bình – thuộc nhóm Bán Cát)",
    nghi: "Tu sửa nhà cũ, xây tường, đắp đê, lấp hố, đòi nợ, bắt kẻ trộm, tích trữ hàng hóa.",
    ky: "Khai trương, khởi sự mới, xuất hành, dời nhà, mở kho xuất tiền.",
    ngoaitru: "Gặp Giải Thần thì hóa giải được tính bảo thủ, có thể làm việc mới."
  },
  "Phá": {
    name: "Trực Phá (Phá bỏ)",
    rating: "Rất Xấu (Đại Hung – thuộc nhóm Trực Xấu, chính là Nguyệt Phá)",
    nghi: "Phá dỡ nhà cũ, đập tường, lấp ao, trị bệnh kinh nguyệt, ly hôn, trừng trị tội nhân.",
    ky: "Tuyệt đối kỵ cưới hỏi, động thổ, khai trương, ký kết, xuất hành, mua bán tài sản lớn.",
    ngoaitru: "Không có ngoại lệ tốt – ngày này chỉ dùng để phá, không dùng để xây."
  },
  "Nguy": {
    name: "Trực Nguy (Nguy hiểm)",
    rating: "Bán Cát Bán Hung (Trung Bình – thuộc nhóm Bán Cát)",
    nghi: "Cầu phúc, lễ thần, bái Phật, làm việc thiện, giải oan, an giường (theo một số sách).",
    ky: "Leo núi cao, đi thuyền xa, xuất hành đường dài, xây dựng cao tầng, mọi việc mạo hiểm.",
    ngoaitru: "Gặp sao Thất (Trong 28 tú) thì hóa giải được hung tính, có thể khởi công (Đổng Công cho phép)."
  },
  "Thành": {
    name: "Trực Thành (Thành công)",
    rating: "Rất Tốt (Đại Cát – thuộc nhóm Tốt Thuần, ngày Thiên Hỷ)",
    nghi: "Mọi việc lớn: khai trương, cưới hỏi, nhập trạch, động thổ, xuất hành, ký kết, cầu tài, thi cử, nhậm chức.",
    ky: "Kiện tụng, tranh chấp (cả hai bên đều mạnh, khó phân thắng thua).",
    ngoaitru: "Gặp Tam Nương, Nguyệt Kỵ, Sát Chủ thì dù Thành cũng không dùng (hung khắc cát)."
  },
  "Thâu": {
    name: "Trực Thu (Thu vào)",
    rating: "Bán Cát Bán Hung (Trung Bình – thuộc nhóm Bán Cát)",
    nghi: "Thu tiền, đòi nợ, thu hoạch mùa màng, mua đất đai, mua súc vật, xây kho chứa, tích trữ.",
    ky: "Khởi công việc mới, xuất tiền lớn, an táng, xuất hành xa, chữa bệnh.",
    ngoaitru: "Khí thế co lại, không thích hợp cho việc mở mang."
  },
  "Khai": {
    name: "Trực Khai (Mở ra)",
    rating: "Rất Tốt (Đại Cát – thuộc nhóm Tốt Thuần, ngày sinh khí mạnh)",
    nghi: "Động thổ, khai trương, cưới hỏi, nhập trạch, xuất hành, cầu tài, thi cử, mở cửa hàng, nhuộm vải.",
    ky: "An táng, chôn cất (mở ra thì không đóng được cửa mả).",
    ngoaitru: "Gặp Thọ Tử, Sát Chủ, Nguyệt Kỵ thì mất tác dụng tốt, trở thành ngày xấu."
  },
  "Bế": {
    name: "Trực Bế (Đóng lại)",
    rating: "Xấu (thuộc nhóm Trực Xấu) nhưng đặc biệt tốt cho tang lễ",
    nghi: "An táng, chôn cất (đóng cửa mả vĩnh viễn), xây tường rào, đắp đê, lấp hang hốc, đặt biển hiệu.",
    ky: "Khai trương, động thổ, cưới hỏi, xuất hành, chữa bệnh (đặc biệt bệnh mắt), châm cứu.",
    ngoaitru: "Ngày này là ngày tốt nhất trong 12 trực để làm tang lễ."
  }
};
