function upDate(previewPic) {
    // 1. Kiểm tra sự kiện hoạt động trong tab Console của trình duyệt
    console.log("Sự kiện hover ảnh thành công!");
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // 2. Thay đổi văn bản hiển thị thành thuộc tính alt của ảnh được di chuột qua
    document.getElementById('image').innerHTML = previewPic.alt;

    // 3. Thay đổi hình nền của khung lớn thành đường dẫn src của ảnh được di chuột qua
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // 1. Đưa hình nền của khung lớn trở về rỗng như ban đầu
    document.getElementById('image').style.backgroundImage = "url('')";

    // 2. Đưa văn bản hiển thị trở về câu hướng dẫn gốc ban đầu
    document.getElementById('image').innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
