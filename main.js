// START OF BACKGROUD IMAGES SWITCH EFFECTS
setInterval(carousel, 7000);
var background = document.querySelector(".backgroundimagesgallery");
var image1 = document.querySelector(".image1");
var image2 = document.querySelector(".image2");
var image3 = document.querySelector(".image3");
var image4 = document.querySelector(".image4");
var image5 = document.querySelector(".image5");
image5.style.display = "block";
function carousel() {
  diceNum = Math.floor(Math.random() * 5 + 1);
  if (diceNum == 1) {
    return (
      image1.classList.add("switchimage"),
      (image1.style.display = "block"),
      (image2.style.display = "none"),
      (image3.style.display = "none"),
      (image4.style.display = "none"),
      (image5.style.display = "none")
    );
  } else if (diceNum == 2) {
    return (
      image2.classList.add("switchimage"),
      (image2.style.display = "block"),
      (image1.style.display = "none"),
      (image3.style.display = "none"),
      (image4.style.display = "none"),
      (image5.style.display = "none")
    );
  } else if (diceNum == 3) {
    return (
      image3.classList.add("switchimage"),
      (image3.style.display = "block"),
      (image2.style.display = "none"),
      (image1.style.display = "none"),
      (image4.style.display = "none"),
      (image5.style.display = "none")
    );
  } else if (diceNum == 4) {
    return (
      image4.classList.add("switchimage"),
      (image4.style.display = "block"),
      (image2.style.display = "none"),
      (image1.style.display = "none"),
      (image3.style.display = "none"),
      (image5.style.display = "none")
    );
  } else if (diceNum == 5) {
    return (
      image5.classList.add("switchimage"),
      (image5.style.display = "block"),
      (image2.style.display = "none"),
      (image1.style.display = "none"),
      (image4.style.display = "none"),
      (image3.style.display = "none")
    );
  } else {
    return showimage1;
  }
}

// END OF BACKGROUD IMAGES SWITCH EFFECTS

// START OF APPEARING AND DISAPPEARING NAV BAR AND SEARCH
window.addEventListener("scroll", reveal);

function reveal() {
  var appeareffect = document.querySelector(".hide");
  var appeareffect2 = document.querySelector(".hide2");
  var navsidetext = document.querySelector(".navsidetext");
  var navbtn = document.querySelector("#navbutton");
  var logo = document.querySelector(".fiverlogo1");
  var logo2 = document.querySelector(".fiverlogo2");
  var navbar = document.querySelector(".nav");
  var windowheight = window.innerHeight;
  var revealtop = navsidetext.getBoundingClientRect().top;
  var revealpoint = 500;
  var revealpoint2 = 600;

  if (revealtop < windowheight - revealpoint2) {
    appeareffect.classList.add("appear");
    appeareffect2.classList.add("appear");
  } else if (revealtop > windowheight - revealpoint) {
    logo.classList.remove("logoeffect");
    logo2.style.display = "none";
    appeareffect.classList.remove("appear");
    appeareffect2.classList.remove("appear");
    navbar.classList.remove("navreveal");
    navbtn.classList.remove("navbtn");
  }

  if (revealtop < windowheight - revealpoint) {
    logo.classList.add("logoeffect");
    logo2.style.display = "block";
    navbar.classList.add("navreveal");
    navbtn.classList.add("navbtn");
  }
}

// END OF APPEARING AND DISAPPEARING NAV BAR AND SEARCH

// START OF POPULAR SECTION
var nextarrowpop = document.querySelector("#nextarrowpopular");
var prevarrowpop = document.querySelector("#prevarrowpopular");
var popsection = document.querySelector(".popularservicesoutter");
var popsecwidth = document.querySelector(".popularservicesoutter").clientWidth;

function scrollnextpop() {
  console.log(popsecwidth);
  popsection.scrollTo(popsecwidth, 0);
}

function scrollprevpop() {
  popsection.scrollTo(-popsecwidth, 0);
}

// END OF POPULAR SECTION
