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

//===================================================

const btnSub = document.querySelector(".btn-sub");
const btnAdd = document.querySelector(".btn-add");
const valueResult = document.querySelector(".value");

class Counter {
  constructor() {
    this.value = document.querySelector(".value").textContent;
  }

  addCounter() {
    this.value = Number(this.value) + 1;
    valueResult.textContent = this.value;
  }

  subCounter() {
    if (this.value > 0) {
      this.value = Number(this.value) - 1;
      valueResult.textContent = this.value;
    }
  }
}

const counter = new Counter();

btnAdd.addEventListener("click", counter.addCounter.bind(counter));
btnSub.addEventListener("click", counter.subCounter.bind(counter));

//=================================================

$(".select-toggle").click(function() {
  $(this).toggleClass("open");
});
