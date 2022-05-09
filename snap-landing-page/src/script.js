//Get menu icon
let menuIcon = document.getElementById("hamburger-icon");
let menuClose = document.getElementById("hamburger-close");
// Menu Section (button)
const menuList = document.getElementById("menu");
const clientLogin = document.getElementById("client-login");

//add event listeners to button
menuIcon.addEventListener("click", function (e) {
  //change image display
  menuIcon.style.display = "none";
  menuClose.style.display = "flex";

  // change style display of menu
  menuList.style.display = "flex";
  clientLogin.style.display = "flex";
});

// close menu

menuClose.addEventListener("click", function (e) {
  //change image display
  menuIcon.style.display = "flex";
  menuClose.style.display = "none";

  // change style display of menu
  menuList.style.display = "none";
  clientLogin.style.display = "none";
});
