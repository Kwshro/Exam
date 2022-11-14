/* Source used: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0 (last located 14th of 11 2022).

Creates constants that selects the id/selector via query selector (all). */

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

/* if menu class list contains show menu, it will remove show menu - it will display it as a block instead of an element
then it will ad showmenu if it didn't contain it and swap the close icon and menu icon display block/none states
it adds eventlistener to the hamburger menu on a click and goggles the function toggleMenu
it will cycles through for each */

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

/* Display block means that it becomes visible and display none means that it becomes invisible.
We added additional javascript at the bottom of html pages because of a bug in the menu where display block would not initially get overwritten by display none.
This code runs a refresh of the style.display on page load, so it functions correctly.

The menu utilizes a system of EventListeners that runs through .forEach and responds to onlick to activate function toggleMenu(). */

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)