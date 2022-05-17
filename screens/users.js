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

let dummyUserData = [
  {
    name: "John Doe1",
    email: "johndoe@gmail1.com",
    gender: "male",
    role: "admin",
  },
  {
    name: "John Doe2",
    email: "johndoe@gmail2.com",
    gender: "female",
    role: "user",
  },
  {
    name: "John Doe3",
    email: "johndoe@gmail3.com",
    gender: "male",
    role: "user",
  },
  {
    name: "John Doe4",
    email: "johndoe@gmail4.com",
    gender: "female",
    role: "user",
  },
  {
    name: "John Doe5",
    email: "johndoe@gmail5.com",
    gender: "male",
    role: "user",
  },
  {
    name: "John Doe6",
    email: "johndoe@gmail6.com",
    gender: "female",
    role: "user",
  },
  {
    name: "John Doe7",
    email: "johndoe@gmail7.com",
    gender: "male",
    role: "user",
  },
  {
    name: "John Doe8",
    email: "johndoe@gmail8.com",
    gender: "female",
    role: "user",
  },
  {
    name: "John Doe9",
    email: "johndoe@gmail9.com",
    gender: "male",
    role: "user",
  },
  {
    name: "John Doe10",
    email: "johndoe@gmail10.com",
    gender: "female",
    role: "user",
  },
  {
    name: "John Doe11",
    email: "johndoe@gmail11.com",
    gender: "male",
    role: "user",
  },
  {
    name: "John Doe12",
    email: "johndoe@gmail.com",
    gender: "female",
    role: "user",
  },
  {
    name: "John Doe13",
    email: "johndoe@gmail13.com",
    gender: "male",
    role: "user",
  },
  {
    name: "John Doe14",
    email: "johndoe@gmail14.com",
    gender: "female",
    role: "user",
  },
];
let page = 1;
function loadUsers(array) {
  var results = document.getElementById("rplContent");
  results.innerHTML = "";
  array.forEach((userObject, index) => {
    if (index >= (page - 1) * 7 && index < page * 7) {
      let itemJsx = `
          <div class="rplContentItem">
          <div class="itemProfile">
              <div class=""></div>
          </div>
          <div class="itemName">
              <p>${userObject.name}</p>
          </div>
          <div class="itemEmail">
              <p>${userObject.email}</p>
          </div>
          <div class="itemGender">
              <p>${userObject.gender}</p>
          </div>
          <div class="itemRole">
              <p>${userObject.role}</p>
          </div>
      </div>
          `;
      results.insertAdjacentHTML("beforeend", itemJsx);
    }
  });
  document.getElementById(`btnpg${page}`).style.backgroundColor = "#eaeaea";
  for (let i = 1; i <= Math.ceil(array.length / 7); i++) {
    if (i != page) {
      document.getElementById(`btnpg${i}`).style.backgroundColor = "#ff000000";
    }
  }
}
loadUsers(dummyUserData, page);

function pageClick(pagex) {
  console.log("page", pagex);
  if (pagex !== page) {
    if (pagex > page) {
      page++;
    } else {
      page--;
    }
    loadUsers(dummyUserData);
  }
}
function triggerFilter() {
  let filter = document.getElementById("filterPopup");
  console.log("filter.style.display", filter.style.display);
  if (filter.style.display === "none") {
    filter.style.display = "block";
    document.getElementById("filterButton").style.backgroundColor = "#f5f5f5";
  } else {
    filter.style.display = "none";
    document.getElementById("filterButton").style.backgroundColor =
      "transparent";
  }
}
let filter = null;

function applyfilter(type) {
  console.log("type", type);
  filter = type;
  let tmpData = dummyUserData;
  if (type === "male") {
    tmpData = tmpData.sort((a, b) => {
      if (a.gender < b.gender) {
        return 1;
      } else if (a.gender > b.gender) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    tmpData = tmpData.sort((a, b) => {
      if (a.gender > b.gender) {
        return 1;
      } else if (a.gender < b.gender) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  loadUsers(tmpData);

  console.log("tmpData", tmpData);
}
