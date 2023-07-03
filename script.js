
// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}

let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let customArrow = document.querySelector(".custom-arrow");
customArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}




// slider js 

$(document).ready(function(){
    $('.center-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      centerPadding: '0px',
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots:false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  });
