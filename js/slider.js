const slider = document.querySelector(".swiper-homes");
const slider1 = document.querySelector(".swiper-reviews");

let swiper = new Swiper(slider, {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

let swiper1 = new Swiper(slider1, {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
