/* Hàm cập nhật hình ảnh và văn bản hiển thị */
function upDate(previewPic) {
    // Lấy phần tử khung hiển thị chính
    const imageDiv = document.getElementById('image');
    
    // Thay đổi đường dẫn ảnh nền và nội dung chữ
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerText = previewPic.alt;
}

/* Hàm khôi phục lại trạng thái ban đầu */
function unDo() {
    const imageDiv = document.getElementById('image');
    
    // Đưa ảnh nền và chữ về mặc định
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerText = "Hover over or focus on an image below to display here.";
}

/* Yêu cầu 8 & 9: Hàm gọi khi trang web load xong để thêm thuộc tính tabindex */
function initializeGallery() {
    // 9a. Thêm thông báo console.log xác nhận sự kiện kích hoạt
    console.log("Trang web đã tải xong (onload event triggered)!");

    // Lấy tất cả các hình ảnh có class 'preview'
    const images = document.querySelectorAll('.preview');

    // 9b. Viết vòng lặp for để lặp qua từng hình ảnh
    for (let i = 0; i < images.length; i++) {
        // 9c. Thêm thuộc tính tabindex = "0"
        images[i].setAttribute('tabindex', '0');
        console.log(`Đã thêm tabindex="0" cho ảnh thứ ${i + 1}: ${images[i].alt}`);
    }
}
