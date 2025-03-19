function checkLogin() {
  let usernameInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;

  const correctUsername = "huanrose@gmail.com";
  const correctPassword = "123456";

  if (usernameInput === correctUsername && passwordInput === correctPassword) {
    console.log("Bạn đăng nhập thành công");
  } else {
    console.log("Bạn đăng nhập thất bại");
  }
}
