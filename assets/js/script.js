
//const preloader = document.querySelector("[data-preloader]");


const navbar = document.querySelector("[data-navbar]");
const btn = document.querySelector("#menu_label");
const cards = document.querySelectorAll(".card-sm");


const header = document.querySelector("[data-header]");

/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */



/*window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});*/










/**
 * MOBILE NAV TOGGLE
 */
let colors = ["hsl(177, 39%, 72%)","hsl(41, 99%, 64%)","hsl(245, 100%, 90%)","hsl(19, 97%, 85%)","hsl(19, 97%, 85%)","white"]


const toggleNavbar = function () { navbar.classList.toggle("active"); }

btn.addEventListener("click", toggleNavbar);


  cards.forEach((card)=>{
    card.style.backgroundColor =  colors[Math.floor(Math.random()*colors.length)]
  })


/**
 * HEADER
 * 
 * active header when window scrolled to 50px
 */



const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);