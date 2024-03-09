// Get tabLinks & tabContents
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

// On openTab fucntion call
function openTab(tabname) {
  for (item of tabLinks) {
    item.classList.remove("active-link");
  }
  for (item of tabContents) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Get SideMenu
var sideMenu = document.getElementById("sidemenu");

// On openTab fucntion call
function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

//Date for copyright at bottom
const date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

//Display/hide Captcha div
var captcha = document.getElementById("captcha");
var message = document.getElementById("message");
message.addEventListener("keypress", displayCaptcha);
function displayCaptcha(e) {
  captcha.classList.remove("invisible");
}
message.addEventListener("focusout", hideCaptcha);
function hideCaptcha() {
  if (message.value == "") {
    captcha.classList.add("invisible");
  }
}
