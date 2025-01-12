document.addEventListener(
  "DOMContentLoaded",
  function () {
    const progressCircle = document.querySelectorAll(".autoplay-progress svg");

    var swiper = new Swiper(".tabs-thumb", {
      slidesPerView: "auto",
      direction: "horizontal",
      watchSlidesProgress: true,
      spaceBetween: 18,
      mousewheel: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        993: {
          direction: "vertical",
          slidesPerView: "auto",
        },
      },
    });

    new Swiper(".tabs-content", {
      loop: true,
      centeredSlides: true,
      loopedSlides: true,
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
      thumbs: {
        swiper: swiper,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.forEach((element) => {
            element.style.setProperty("--progress", 1 - progress);
          });
        },
      },
    });
  },
  false
);
