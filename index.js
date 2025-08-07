// Bạn có thể thêm các tính năng tương tác ở đây nếu cần,
// nhưng layout này chủ yếu là tĩnh và không yêu cầu JS.

// Ví dụ: kiểm tra tính hợp lệ của form trước khi gửi
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const fullName = form.querySelector('input[placeholder="Full name"]').value;
            const email = form.querySelector('input[placeholder="Email address"]').value;
            const message = form.querySelector('textarea').value;
            const termsAccepted = form.querySelector('#terms').checked;

            if (!fullName || !email || !message) {
                alert('Vui lòng điền đầy đủ các trường bắt buộc.');
                e.preventDefault();
            } else if (!termsAccepted) {
                alert('Bạn phải đồng ý với các điều khoản.');
                e.preventDefault();
            }
        });
    }
});