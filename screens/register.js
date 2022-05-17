document.querySelector("#psw1").addEventListener("focus", addBorder1);
document.querySelector("#psw1").addEventListener("blur", removeBorder1);
document.querySelector("#psb1").addEventListener("click", showPassword1);

document.querySelector("#psw2").addEventListener("focus", addBorder2);
document.querySelector("#psw2").addEventListener("blur", removeBorder2);
document.querySelector("#psb2").addEventListener("click", showPassword2);

function addBorder1() {
  document.getElementById("passwordBox1").style.border = "1px solid #858585";
}
function addBorder2() {
  document.getElementById("passwordBox2").style.border = "1px solid #858585";
}

function removeBorder1() {
  document.getElementById("passwordBox1").style.border = "";
}

function removeBorder2() {
  document.getElementById("passwordBox2").style.border = "";
}

function showPassword1() {
  var x = document.getElementById("psw1");
  if (x.type === "password") {
    x.type = "text";
    document.querySelector("#psb1").src = "./assets/icons/eyeSlashIcon.svg";
  } else {
    x.type = "password";
    document.querySelector("#psb1").src = "./assets/icons/eyeIcon.svg";
  }
}
function showPassword2() {
  var x = document.getElementById("psw2");
  if (x.type === "password") {
    x.type = "text";
    document.querySelector("#psb2").src = "./assets/icons/eyeSlashIcon.svg";
  } else {
    x.type = "password";
    document.querySelector("#psb2").src = "./assets/icons/eyeIcon.svg";
  }
}
document.getElementById("signUpButton").addEventListener("click", function () {
  window.location.href = "./dashboard.html";
});
