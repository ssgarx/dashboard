document.querySelector("#psw").addEventListener("focus", addBorder);
document.querySelector("#psw").addEventListener("blur", removeBorder);
document.querySelector("#psb").addEventListener("click", showPassword);

function addBorder() {
  document.querySelector(".passwordBox").style.border = "1px solid #858585";
}
function removeBorder() {
  document.querySelector(".passwordBox").style.border = "";
}
function showPassword() {
  var x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
    document.querySelector("#psb").src = "./assets/icons/eyeSlashIcon.svg";
  } else {
    x.type = "password";
    document.querySelector("#psb").src = "./assets/icons/eyeIcon.svg";
  }
}
document.getElementById("signInButton").addEventListener("click", function () {
  window.location.href = "./screens/dashboard.html";
});
