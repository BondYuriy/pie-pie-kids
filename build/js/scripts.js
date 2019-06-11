$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 100) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    }
  });
});

//================================================

$(".navbar-toggler").click(function() {
  $(this).toggleClass("open");
});

//=================================================

$(".home-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$(".options-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  navText: [
    "<i class='fa fa-arrow-left'></i>",
    "<i class='fa fa-arrow-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    590: {
      items: 2
    }
  }
});

//==================================================

$(".btn-toggle-filter").click(function() {
  $(this)
    .next(".category-filter")
    .toggleClass("show");
});

//=================================================

$(".select-toggle").click(function() {
  $(this).toggleClass("open");
});

//========================================================

("use strict");

var btnSub = document.querySelector(".btn-sub");
var btnAdd = document.querySelector(".btn-add");
var valueResult = document.querySelector(".value");

var addCounter = function addCounter() {
  valueResult.textContent = Number(valueResult.textContent) + 1;
};

var subCounter = function subCounter() {
  if (Number(valueResult.textContent) > 0) {
    valueResult.textContent = Number(valueResult.textContent) - 1;
  }
};

btnAdd.addEventListener("click", addCounter);
btnSub.addEventListener("click", subCounter);
