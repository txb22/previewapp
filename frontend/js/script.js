var swiper = new Swiper(".mySwiper", {});
var swiper = new Swiper(".mySlide", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
            el: ".swiper-pagination",
            clickable: true,
      }, autoplay: {
            delay: 3000,
      }
});