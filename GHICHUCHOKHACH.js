document.addEventListener("DOMContentLoaded", function() {
    const printNoteKhach = document.getElementById("print-note-khach");
    const locationInput = document.getElementById("location-check");

    function renderGhiChuKhach() {
        if (!printNoteKhach) return;

        const diaDiemNhap = locationInput ? locationInput.value.trim() : "";
        const diaDiemText = diaDiemNhap
            ? diaDiemNhap
            : "theo thông tin quý khách/gia chủ đã cung cấp";

        printNoteKhach.innerHTML = `
        <h2>ĐẮC THIÊN KHÍ - VẠN SỰ AN</h2>
        <p>* Ngày giờ tốt dưới đây đã được tính toán và chọn lọc kỹ càng, dựa trên nhiều phương pháp cổ học tinh hoa, kết hợp hài hòa các yếu tố Thiên - Địa - Nhân Khí, nhằm mang lại sự cát tường, hanh thông cho công việc của quý gia chủ.</p>
        <p>** Những khung giờ được tô màu xanh là các giờ tốt đã được chọn lọc. Kính mong quý khách sắp xếp thực hiện đúng khung giờ này để công việc được thuận lợi, viên mãn.</p>
        <p>*** Giờ tốt đã được chọn lọc chính xác đến từng Khắc. Nếu có thể, quý khách nên ưu tiên thực hiện đúng vào khắc tốt để đạt hiệu quả cao nhất; trường hợp không sắp xếp được, thực hiện trong khung giờ tốt đã chọn vẫn đảm bảo cát lợi.</p>

        <p>Lưu ý:</p>
            <p>1. Ngày giờ tốt nêu trên được lựa chọn riêng theo tuổi và mục đích cụ thể của quý khách; không áp dụng cho tuổi khác hoặc mục đích khác.</p>
            <p>2. Tùy theo vùng địa lý và thời điểm trong năm, giờ mặt trời mọc, đứng bóng, lặn sẽ khác nhau, do đó khung giờ chuẩn cũng có sự thay đổi tương ứng. Địa điểm được sử dụng để tính toán là: <b>${diaDiemText}</b>. Nếu quý khách ở khu vực khác, vui lòng phản hồi để được tính toán lại cho chính xác.</p>
            <p>3. Với các việc như xuất hành, cúng bái,... để tăng thêm hiệu quả, quý khách có thể chọn hướng "Tài Thần" hoặc "Hỷ Thần" để xuất phát hoặc xoay mặt về hướng đó khi hành lễ.</p>
        <p>Trân trọng.</p>
        `;
    }

    renderGhiChuKhach();

    // Cập nhật lại địa điểm trong ghi chú mỗi khi người dùng thay đổi ô "Địa điểm"
    if (locationInput) {
        locationInput.addEventListener("input", renderGhiChuKhach);
        locationInput.addEventListener("change", renderGhiChuKhach);
    }
});
