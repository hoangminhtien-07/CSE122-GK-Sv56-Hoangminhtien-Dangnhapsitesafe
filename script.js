const form = document.querySelector("#signup");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm");
const errorMessage = document.querySelector("#error");
const statusMessage = document.querySelector("#status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (password.value !== confirmPassword.value) {
    errorMessage.textContent = "Mật khẩu xác nhận chưa khớp.";
    confirmPassword.focus();
    return;
  }

  if (!/\d/.test(password.value)) {
    errorMessage.textContent = "Mật khẩu cần có ít nhất một chữ số.";
    password.focus();
    return;
  }

  errorMessage.textContent = "";
  statusMessage.innerHTML =
    "<b>Đăng ký thành công: đang chờ phê duyệt</b><br>Hãy kiểm tra email để xác minh tài khoản.";
});

confirmPassword.addEventListener("input", function () {
  errorMessage.textContent = "";
});

document.querySelector("#login").addEventListener("click", function () {
  statusMessage.textContent =
    "Bạn đã chọn đăng nhập. Hãy mở trang đăng nhập SiteSafe để tiếp tục.";
});
