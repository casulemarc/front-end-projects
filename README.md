# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/desktop-design.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### CUSTOM JAVASCRIPT RESPONSIVE MENU

```js
//Get menu icon
let menuIcon = document.getElementById("hamburger-icon");
let menuClose = document.getElementById("hamburger-close");
// Menu Section (button)
const menuList = document.getElementById("menu");
const clientLogin = document.getElementById("client-login")
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

```

## Author

- Website - [Mark Kasule](https://mlkasule.com/)
- Frontend Mentor - [@casulemarc](https://www.frontendmentor.io/profile/casulemarc)
- Twitter - [@mkasulecoder](https://www.twitter.com/mkasulecoder)
- YouTube - [mKasule Coder](https://www.youtube.com/channel/UC3cQi5gvNeiPiPXTrMhZJMg)


## Acknowledgments

This project is for junior developers who are interested in uping their front ends skills. Credit to front end mentor for providing this project for free.
