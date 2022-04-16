//Get menu icon
const hamburgerIcon = document.getElementById("icon-hamburger");
const closeIcon = document.getElementById("icon-close");

//get header section
const header = document.getElementById("header");

// menu list
const menu = document.getElementById("menu");

//add event listeners to button
hamburgerIcon.addEventListener("click", function (e) {
  //change image display
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "flex";

  //add new class to main header
  header.classList.add("header-pop-up");
  header.style.height = "90vh";

  // change style display of menu
  menu.style.display = "flex";
});

// close menu

closeIcon.addEventListener("click", function (e) {
  //change image display
  hamburgerIcon.style.display = "flex";
  closeIcon.style.display = "none";

  //remove the new class from the main header
  header.classList.remove("header-pop-up");
  header.style.height = "auto";

  // change style display of menu
  menu.style.display = "none";
});
