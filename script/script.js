var swiper = new Swiper(".articals-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 600: {
    //   slidesPerView: 1,
    // },
    940: {
      slidesPerView: 2,
    },
    1375: {
      slidesPerView: 3,
    },
  },
});

const menu = document.querySelector(".nav__menu");
const nav_menu = document.querySelector(".navh");
const nav = document.querySelector(".nav");
console.log(nav);
menu.addEventListener("click", () => {
  nav_menu.classList.toggle("show");
});
