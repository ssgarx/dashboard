if (window.location.href.indexOf("dashboard") > -1) {
  document.getElementById("dashboard").style.fontWeight = "bold";
} else if (window.location.href.indexOf("transactions") > -1) {
  document.getElementById("transactions").style.fontWeight = "bold";
} else if (window.location.href.indexOf("schedules") > -1) {
  document.getElementById("schedules").style.fontWeight = "bold";
} else if (window.location.href.indexOf("users") > -1) {
  document.getElementById("users").style.fontWeight = "bold";
} else if (window.location.href.indexOf("settings") > -1) {
  document.getElementById("settings").style.fontWeight = "bold";
}
function route(target) {
  if (target === "dashboard") {
    window.location.replace("http://127.0.0.1:5500/screens/dashboard.html");
  } else if (target === "transactions") {
    // window.location.replace("http://127.0.0.1:5500/screens/transactions.html");
  } else if (target === "schedules") {
    // window.location.replace("http://127.0.0.1:5500/screens/schedules.html");
  } else if (target === "users") {
    window.location.replace("http://127.0.0.1:5500/screens/users.html");
  } else if (target === "settings") {
    window.location.replace("http://127.0.0.1:5500/screens/settings.html");
  }
}
let hamIcon = document.getElementById("hamIcon");
let closeIcon = document.getElementById("closeIcon");
[hamIcon, closeIcon].forEach(function (element) {
  element.addEventListener("click", function () {
    //get element by class name leftPanel and change its left property to 0 if it is not 0
    if (document.getElementsByClassName("leftPanel")[0].style.left === "0px") {
      document.getElementsByClassName("leftPanel")[0].style.left = "-100%";
    } else {
      document.getElementsByClassName("leftPanel")[0].style.left = "0px";
    }
  });
});
