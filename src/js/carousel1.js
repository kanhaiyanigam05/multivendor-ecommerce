if (document.querySelectorAll(".tf-sw-top_bar").length > 0) {
  var tfSwTopbar = document.querySelector(".tf-sw-top_bar");
  var preview = tfSwTopbar.getAttribute("data-preview");
  var spacing = tfSwTopbar.getAttribute("data-space");
  var loop = tfSwTopbar.getAttribute("data-loop") === "true";
  var speed = parseInt(tfSwTopbar.getAttribute("data-speed"), 10);
  var play = tfSwTopbar.getAttribute("data-auto-play") === "true";
  var delay = parseInt(tfSwTopbar.getAttribute("data-delay"), 10);

  var swiper = new Swiper(".tf-sw-top_bar", {
    autoplay: {
      delay: delay,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    observer: true,
    observeParents: true,
    autoplay: play,
    slidesPerView: preview,
    loop: loop,
    spaceBetween: spacing,
    speed: speed,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-topbar",
      prevEl: ".nav-next-topbar",
    },
  });

  tfSwTopbar.hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
}

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

if (document.querySelectorAll(".tf-sw-effect").length > 0) {
  var swiper2 = new Swiper(".tf-sw-effect", {
    spaceBetween: 0,
    speed: 2000,
    effect: "fade",
    observer: true,
    observeParents: true,
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".sw-pagination-slider",
      clickable: true,
    },
    navigation: {
      clickable: true,
      nextEl: ".nav-next-slider",
      prevEl: ".nav-prev-slider",
    },
  });
}

if (document.querySelectorAll(".tf-sw-collection").length > 0) {
  var tfSwCls = document.querySelector(".tf-sw-collection");
  var preview = tfSwCls.getAttribute("data-preview");
  var tablet = tfSwCls.getAttribute("data-tablet");
  var mobile = tfSwCls.getAttribute("data-mobile");
  var mobileSm =
    tfSwCls.getAttribute("data-mobile-sm") !== null
      ? tfSwCls.getAttribute("data-mobile-sm")
      : mobile;
  var spacingLg = tfSwCls.getAttribute("data-space-lg");
  var spacingMd = tfSwCls.getAttribute("data-space-md");
  var spacing = tfSwCls.getAttribute("data-space");
  var loop = tfSwCls.getAttribute("data-loop") === "true";
  var perGroup = tfSwCls.getAttribute("data-pagination") || 1;
  var perGroupMd = tfSwCls.getAttribute("data-pagination-md") || 1;
  var perGroupLg = tfSwCls.getAttribute("data-pagination-lg") || 1;

  var swiper = new Swiper(".tf-sw-collection", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    speed: 1000,
    pagination: {
      el: ".sw-pagination-collection",
      clickable: true,
    },
    observer: true,
    observeParents: true,
    slidesPerGroup: perGroup,
    navigation: {
      clickable: true,
      nextEl: ".nav-next-collection",
      prevEl: ".nav-prev-collection",
    },
    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacing,
        slidesPerGroup: perGroup,
      },
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
        slidesPerGroup: perGroupMd,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
        slidesPerGroup: perGroupLg,
      },
    },
  });
}

if (document.querySelectorAll(".tf-sw-categories").length > 0) {
  var tfSwCategories = document.querySelector(".tf-sw-categories");
  var preview = tfSwCategories.getAttribute("data-preview");
  var tablet = tfSwCategories.getAttribute("data-tablet");
  var mobile = tfSwCategories.getAttribute("data-mobile");
  var mobileSm =
    tfSwCategories.getAttribute("data-mobile-sm") !== null
      ? tfSwCategories.getAttribute("data-mobile-sm")
      : mobile;
  var spacingLg = tfSwCategories.getAttribute("data-space-lg");
  var spacingMd = tfSwCategories.getAttribute("data-space-md");
  var spacing = tfSwCategories.getAttribute("data-space");
  var perGroup = tfSwCategories.getAttribute("data-pagination") || 1;
  var perGroupMd = tfSwCategories.getAttribute("data-pagination-md") || 1;
  var perGroupLg = tfSwCategories.getAttribute("data-pagination-lg") || 1;
  var loop =
    tfSwCategories.getAttribute("data-loop") !== null
      ? tfSwCategories.getAttribute("data-loop") === "true"
      : false;
  var centered =
    tfSwCategories.getAttribute("data-centered") !== null
      ? tfSwCategories.getAttribute("data-centered") === "true"
      : false;

  var swiper = new Swiper(".tf-sw-categories", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    speed: 1000,
    pagination: {
      el: ".sw-pagination-categories",
      clickable: true,
    },
    slidesPerGroup: perGroup,
    observer: true,
    centeredSlides: centered,
    observeParents: true,
    navigation: {
      clickable: true,
      nextEl: ".nav-next-categories",
      prevEl: ".nav-prev-categories",
    },
    loop: loop,
    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacing,
        slidesPerGroup: perGroup,
      },
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
        slidesPerGroup: perGroupMd,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
        slidesPerGroup: perGroupLg,
      },
    },
  });
}

if (document.querySelectorAll(".tf-sw-recent").length > 0) {
  var tfSwRecentElements = document.querySelectorAll(".tf-sw-recent");

  tfSwRecentElements.forEach(function (element) {
    var preview = element.getAttribute("data-preview");
    var tablet = element.getAttribute("data-tablet");
    var mobile = element.getAttribute("data-mobile");
    var spacingLg = element.getAttribute("data-space-lg");
    var spacingMd = element.getAttribute("data-space-md");
    var spacing = element.getAttribute("data-space");
    var perGroup = element.getAttribute("data-pagination");
    var perGroupMd = element.getAttribute("data-pagination-md");
    var perGroupLg = element.getAttribute("data-pagination-lg");

    var swiper = new Swiper(element, {
      slidesPerView: mobile,
      spaceBetween: spacing,
      pagination: {
        el: element.querySelector(".sw-pagination-recent"),
        clickable: true,
      },
      slidesPerGroup: perGroup,
      observer: true,
      observeParents: true,
      speed: 1000,
      navigation: {
        clickable: true,
        nextEl: element.querySelector(".nav-prev-recent"),
        prevEl: element.querySelector(".nav-next-recent"),
      },
      breakpoints: {
        768: {
          slidesPerView: tablet,
          spaceBetween: spacingMd,
          slidesPerGroup: perGroupMd,
        },
        1200: {
          slidesPerView: preview,
          spaceBetween: spacingLg,
          slidesPerGroup: perGroupLg,
        },
      },
    });
  });
}

if (document.querySelectorAll(".tf-sw-latest").length > 0) {
  var tfSwLatest = document.querySelector(".tf-sw-latest");
  var preview = tfSwLatest.getAttribute("data-preview");
  var tablet = tfSwLatest.getAttribute("data-tablet");
  var mobile = tfSwLatest.getAttribute("data-mobile");
  var spacingLg = tfSwLatest.getAttribute("data-space-lg");
  var spacingMd = tfSwLatest.getAttribute("data-space-md");
  var spacing = tfSwLatest.getAttribute("data-space");
  var perGroup = tfSwLatest.getAttribute("data-pagination");
  var perGroupMd = tfSwLatest.getAttribute("data-pagination-md");
  var perGroupLg = tfSwLatest.getAttribute("data-pagination-lg");

  var swiper = new Swiper(".tf-sw-latest", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    observer: true,
    observeParents: true,
    speed: 1000,
    pagination: {
      el: ".sw-pagination-latest",
      clickable: true,
    },
    slidesPerGroup: perGroup,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-latest",
      prevEl: ".nav-next-latest",
    },
    breakpoints: {
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
        slidesPerGroup: perGroupMd,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
        slidesPerGroup: perGroupLg,
      },
    },
  });
}

if (document.querySelectorAll(".tf-sw-products").length > 0) {
  var tfSwProducts = document.querySelector(".tf-sw-products");
  var preview = tfSwProducts.getAttribute("data-preview");
  var tablet = tfSwProducts.getAttribute("data-tablet");
  var mobile = tfSwProducts.getAttribute("data-mobile");
  var spacingLg = tfSwProducts.getAttribute("data-space-lg");
  var spacingMd = tfSwProducts.getAttribute("data-space-md");
  var spacing = tfSwProducts.getAttribute("data-space");
  var perGroup = tfSwProducts.getAttribute("data-pagination");
  var perGroupMd = tfSwProducts.getAttribute("data-pagination-md");
  var perGroupLg = tfSwProducts.getAttribute("data-pagination-lg");

  var swiper = new Swiper(".tf-sw-products", {
    speed: 1000,
    slidesPerView: mobile,
    spaceBetween: spacing,
    pagination: {
      el: ".sw-pagination-products",
      clickable: true,
    },
    slidesPerGroup: perGroup,
    observer: true,
    observeParents: true,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-products",
      prevEl: ".nav-next-products",
    },
    breakpoints: {
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
        slidesPerGroup: perGroupMd,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
        slidesPerGroup: perGroupLg,
      },
    },
  });
}

if (document.querySelectorAll(".tf-sw-products1").length > 0) {
  var tfSwProducts1 = document.querySelector(".tf-sw-products1");
  var preview = tfSwProducts1.getAttribute("data-preview");
  var tablet = tfSwProducts1.getAttribute("data-tablet");
  var mobile = tfSwProducts1.getAttribute("data-mobile");
  var spacingLg = tfSwProducts1.getAttribute("data-space-lg");
  var spacingMd = tfSwProducts1.getAttribute("data-space-md");
  var spacing = tfSwProducts1.getAttribute("data-space");
  var perGroup = tfSwProducts1.getAttribute("data-pagination");
  var perGroupMd = tfSwProducts1.getAttribute("data-pagination-md");
  var perGroupLg = tfSwProducts1.getAttribute("data-pagination-lg");

  var swiper = new Swiper(".tf-sw-products1", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".sw-pagination-products1",
      clickable: true,
    },
    speed: 1000,
    slidesPerGroup: perGroup,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-products1",
      prevEl: ".nav-next-products1",
    },
    breakpoints: {
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
        slidesPerGroup: perGroupMd,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
        slidesPerGroup: perGroupLg,
      },
    },
  });
}

if (document.querySelectorAll(".tf-sw-testimonial").length > 0) {
  var tfSwTestimonial = document.querySelector(".tf-sw-testimonial");
  var preview = tfSwTestimonial.getAttribute("data-preview");
  var tablet = tfSwTestimonial.getAttribute("data-tablet");
  var mobile = tfSwTestimonial.getAttribute("data-mobile");
  var spacingLg = tfSwTestimonial.getAttribute("data-space-lg");
  var spacingMd = tfSwTestimonial.getAttribute("data-space-md");
  var spacing = tfSwTestimonial.getAttribute("data-space");
  var perGroup = tfSwTestimonial.getAttribute("data-pagination");
  var perGroupMd = tfSwTestimonial.getAttribute("data-pagination-md");
  var perGroupLg = tfSwTestimonial.getAttribute("data-pagination-lg");

  var swiper = new Swiper(".tf-sw-testimonial", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    speed: 1000,
    pagination: {
      el: ".sw-pagination-testimonial",
      clickable: true,
    },
    observer: true,
    observeParents: true,
    slidesPerGroup: perGroup,
    navigation: {
      clickable: true,
      nextEl: ".nav-next-testimonial",
      prevEl: ".nav-prev-testimonial",
    },
    breakpoints: {
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
        slidesPerGroup: perGroupMd,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
        slidesPerGroup: perGroupLg,
      },
    },
  });
}

if (document.querySelectorAll(".tf-sw-shop-gallery").length > 0) {
  var tfSwGallery = document.querySelector(".tf-sw-shop-gallery");
  var preview = tfSwGallery.getAttribute("data-preview");
  var tablet = tfSwGallery.getAttribute("data-tablet");
  var mobile = tfSwGallery.getAttribute("data-mobile");
  var spacingLg = tfSwGallery.getAttribute("data-space-lg");
  var spacingMd = tfSwGallery.getAttribute("data-space-md");
  var spacing = tfSwGallery.getAttribute("data-space");
  var perGroup = tfSwGallery.getAttribute("data-pagination") || 1;
  var perGroupMd = tfSwGallery.getAttribute("data-pagination-md") || 1;
  var perGroupLg = tfSwGallery.getAttribute("data-pagination-lg") || 1;
  var loop =
    tfSwGallery.getAttribute("data-loop") !== null
      ? tfSwGallery.getAttribute("data-loop") === "true"
      : false;
  var centered =
    tfSwGallery.getAttribute("data-centered") !== null
      ? tfSwGallery.getAttribute("data-centered") === "true"
      : false;
  var mobileSm =
    tfSwGallery.getAttribute("data-mobile-sm") !== null
      ? tfSwGallery.getAttribute("data-mobile-sm")
      : mobile;

  var swiper = new Swiper(".tf-sw-shop-gallery", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".sw-pagination-gallery",
      clickable: true,
    },
    loop: loop,
    slidesPerGroup: perGroup,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      clickable: true,
      nextEl: ".nav-next-gallery",
      prevEl: ".nav-prev-gallery",
    },
    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacing,
        slidesPerGroup: perGroup,
      },
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
        slidesPerGroup: perGroupMd,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
        slidesPerGroup: perGroupLg,
        centeredSlides: centered,
      },
    },
  });
}

if (document.querySelectorAll(".tf-sw-iconbox").length > 0) {
  var tfSwIconbox = document.querySelector(".tf-sw-iconbox");
  var preview = tfSwIconbox.getAttribute("data-preview");
  var tablet = tfSwIconbox.getAttribute("data-tablet");
  var mobile = tfSwIconbox.getAttribute("data-mobile");
  var mobileSm = tfSwIconbox.getAttribute("data-mobile-sm");
  var spacingLg = tfSwIconbox.getAttribute("data-space-lg");
  var spacingMd = tfSwIconbox.getAttribute("data-space-md");
  var spacing = tfSwIconbox.getAttribute("data-space");
  var perGroup = tfSwIconbox.getAttribute("data-pagination");
  var perGroupSm = tfSwIconbox.getAttribute("data-pagination-sm");
  var perGroupMd = tfSwIconbox.getAttribute("data-pagination-md");
  var perGroupLg = tfSwIconbox.getAttribute("data-pagination-lg");

  var swiper = new Swiper(".tf-sw-iconbox", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    speed: 1000,
    pagination: {
      el: ".sw-pagination-iconbox",
      clickable: true,
    },
    observer: true,
    observeParents: true,
    slidesPerGroup: perGroup,
    navigation: {
      clickable: true,
      nextEl: ".nav-next-iconbox",
      prevEl: ".nav-prev-iconbox",
    },
    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacingMd,
        slidesPerGroup: perGroupSm,
      },

      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
        slidesPerGroup: perGroupMd,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
        slidesPerGroup: perGroupLg,
      },
    },
  });
}

if (document.querySelectorAll(".tf-sw-lookbook").length > 0) {
  var tfSwLb = document.querySelector(".tf-sw-lookbook");
  var preview = tfSwLb.getAttribute("data-preview");
  var tablet = tfSwLb.getAttribute("data-tablet");
  var mobile = tfSwLb.getAttribute("data-mobile");
  var spacingLg = tfSwLb.getAttribute("data-space-lg");
  var spacingMd = tfSwLb.getAttribute("data-space-md");
  var spacing = tfSwLb.getAttribute("data-space");
  var perGroup = tfSwLb.getAttribute("data-pagination");
  var perGroupMd = tfSwLb.getAttribute("data-pagination-md");
  var perGroupLg = tfSwLb.getAttribute("data-pagination-lg");
  var mobileSm =
    tfSwLb.getAttribute("data-mobile-sm") !== null
      ? tfSwLb.getAttribute("data-mobile-sm")
      : mobile;

  var swiperLb = new Swiper(".tf-sw-lookbook", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    observer: true,
    observeParents: true,
    speed: 1000,
    pagination: {
      el: ".sw-pagination-lookbook",
      clickable: true,
    },
    slidesPerGroup: perGroup,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-lookbook",
      prevEl: ".nav-next-lookbook",
    },
    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacing,
        slidesPerGroup: perGroup,
      },
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
        slidesPerGroup: perGroupMd,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
        slidesPerGroup: perGroupLg,
      },
    },
  });

  document.querySelectorAll(".swiper-button").forEach(function (button) {
    button.addEventListener("click", function () {
      var slideIndex = button.getAttribute("data-slide");
      swiperLb.slideTo(slideIndex, 500, false);
    });
  });
}

if (document.querySelectorAll(".tf-sw-partner").length > 0) {
  var tfSwPartner = document.querySelector(".tf-sw-partner");
  var preview = tfSwPartner.getAttribute("data-preview");
  var tablet = tfSwPartner.getAttribute("data-tablet");
  var mobile = tfSwPartner.getAttribute("data-mobile");
  var mobileSm = tfSwPartner.getAttribute("data-mobile-sm");
  var spacingLg = tfSwPartner.getAttribute("data-space-lg");
  var spacingMd = tfSwPartner.getAttribute("data-space-md");
  var spacing = tfSwPartner.getAttribute("data-space");
  var loop = tfSwPartner.getAttribute("data-loop") === "true";
  var play = tfSwPartner.getAttribute("data-auto-play") === "true";
  var speed =
    tfSwPartner.getAttribute("data-speed") !== null
      ? parseInt(tfSwPartner.getAttribute("data-speed"), 10)
      : 1000;

  var swiper = new Swiper(".tf-sw-partner", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    autoplay: play,
    slidesPerView: mobile,
    spaceBetween: spacing,
    speed: speed,
    loop: loop,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".sw-pagination-partner",
      clickable: true,
    },
    navigation: {
      clickable: true,
      nextEl: ".nav-next-partner",
      prevEl: ".nav-prev-partner",
    },
    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacingMd,
      },
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
      },
      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
      },
    },
  });

  tfSwPartner.addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
  });

  tfSwPartner.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
  });
}

if (document.querySelectorAll(".tf-sw-mobile").length > 0) {
  var swiperMb;
  var screenWidth = document
    .querySelector(".tf-sw-mobile")
    .getAttribute("data-screen");
  function initSwiper() {
    if (
      window.matchMedia(`only screen and (max-width: ${screenWidth}px)`).matches
    ) {
      if (!swiperMb) {
        var preview = document
          .querySelector(".tf-sw-mobile")
          .getAttribute("data-preview");
        var spacing = document
          .querySelector(".tf-sw-mobile")
          .getAttribute("data-space");

        swiperMb = new Swiper(".tf-sw-mobile", {
          slidesPerView: preview,
          spaceBetween: spacing,
          speed: 1000,
          pagination: {
            el: ".sw-pagination-mb",
            clickable: true,
          },
          navigation: {
            clickable: true,
            nextEl: ".nav-prev-mb",
            prevEl: ".nav-next-mb",
          },
        });
      }
    } else {
      if (swiperMb) {
        swiperMb.destroy(true, true);
        swiperMb = null;
        document
          .querySelector(".tf-sw-mobile .swiper-wrapper")
          .removeAttribute("style");
        document
          .querySelectorAll(".tf-sw-mobile .swiper-slide")
          .forEach(function (slide) {
            slide.removeAttribute("style");
          });
      }
    }
  }

  initSwiper();
  window.addEventListener("resize", function () {
    initSwiper();
  });
}

if (document.querySelectorAll(".tf-product-header").length > 0) {
  var swiper = new Swiper(".tf-product-header", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-product-header",
      prevEl: ".nav-next-product-header",
    },
  });
}
