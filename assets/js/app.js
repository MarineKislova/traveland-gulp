import * as commonFunctions from "./modules/functions.js";

commonFunctions.isWebp();

window.addEventListener("DOMContentLoaded", function () {
  // burger menu toggle
  document.querySelector(".burger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".burger__nav-list").classList.toggle("open");
  });

  // slider
  let count = 0;
  let width;
  let gap;
  let cardsPerView;
  const sliderLine = document.querySelector(".offers__cards-inner");
  const slide = document.querySelectorAll(".offers__card");
  const next = document.querySelector(".pagonation__arrow-next");
  const prev = document.querySelector(".pagonation__arrow-prev");
  const pagonation = document.querySelectorAll(".pagonation__btn");

  width = slide[0].clientWidth;
  gap = parseInt(getComputedStyle(sliderLine).gap);
  console.log(width);
  console.log(gap);

  function resize() {
    width = slide[0].clientWidth;
    gap = parseInt(getComputedStyle(sliderLine).gap);
    sliderLine.style.width = (width + gap) * slide.length + "px";

    slide.forEach((el, index) => {
      // el.style.left = width * (index + 1) + gap + "px";
      el.style.width = width + "px";
      console.log(el);
    });
    moveSlide(0);
  }

  window.addEventListener("resize", resize);
  resize();

  function moveSlide() {
    if (count >= slide.length) {
      count = 0;
    }
    if (count < 0) {
      count = slide.length - 1;
    }
    sliderLine.style.transform = `translateX(-${width * count}px)`;

    pagonation.forEach((btn, index) => {
      btn.classList.toggle("active", index === count);
    });
  }

  next.addEventListener("click", () => {
    count++;
    moveSlide();
  });

  prev.addEventListener("click", () => {
    count--;
    moveSlide();
  });

  pagonation.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      count = index;
      moveSlide();
    });
  });
});
