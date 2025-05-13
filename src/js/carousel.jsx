if (document.querySelectorAll(".tf-sw-slideshow").length > 0) {
  var tfSwSlideshow = document.querySelector(".tf-sw-slideshow");
  var preview = tfSwSlideshow.getAttribute("data-preview");
  var tablet = tfSwSlideshow.getAttribute("data-tablet");
  var mobile = tfSwSlideshow.getAttribute("data-mobile");
  var spacing = tfSwSlideshow.getAttribute("data-space");
  var spacingMb = tfSwSlideshow.getAttribute("data-space-mb");
  var loop = tfSwSlideshow.getAttribute("data-loop") === "true";
  var play = tfSwSlideshow.getAttribute("data-auto-play") === "true";
  var centered = tfSwSlideshow.getAttribute("data-centered") === "true";
  var effect = tfSwSlideshow.getAttribute("data-effect");
  var speed =
    tfSwSlideshow.getAttribute("data-speed") !== null
      ? parseInt(tfSwSlideshow.getAttribute("data-speed"), 10)
      : 1000;

  var swiperSlider = {
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    autoplay: play,
    slidesPerView: mobile,
    loop: loop,
    spaceBetween: spacingMb,
    speed: speed,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".sw-pagination-slider",
      clickable: true,
    },
    navigation: {
      clickable: true,
      nextEl: ".navigation-next-slider",
      prevEl: ".navigation-prev-slider",
    },
    centeredSlides: false,
    breakpoints: {
      768: {
        slidesPerView: tablet,
        spaceBetween: spacing,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacing,
        centeredSlides: centered,
      },
    },
  };
  if (effect === "fade") {
    swiperSlider.effect = "fade";
    swiperSlider.fadeEffect = {
      crossFade: true,
    };
  }

  var swiper = new Swiper(".tf-sw-slideshow", swiperSlider);
}
