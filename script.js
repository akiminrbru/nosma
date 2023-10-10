document.addEventListener("DOMContentLoaded", () => {
  const swiperBanner = new Swiper('.swiperBanner', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },

     // If we need pagination
    pagination: {
        el: '.swiper-pagination-banner',
        clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      1325: {
          spaceBetween: 20,
      },
  }
  });

  let swiperDetail = new Swiper(".swiperDetail", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  let swiperDetail2 = new Swiper(".swiperDetail2", {
    // loop: true,
    spaceBetween: 20,
    thumbs: {
      swiper: swiperDetail,
    },
  });

  // Свайпер на детальной 3

  const swiperRec = new Swiper('.swiperRec', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 14,

    breakpoints: {
      390: {
          slidesPerView: 2,
          spaceBetween: 14,
          slideToClickedSlide: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        slideToClickedSlide: true,
      },
      1326: {
          slidesPerView: 4,
          spaceBetween: 20,
          slideToClickedSlide: true,
      }
    },

    pagination: {
      el: '.swiper-pagination-rec',
      clickable: true,
    },
  });


  // Перемещение элемента 

  const place = document.querySelector('.headerBottom__callback');
  const enter = document.querySelector('.headerTop__phone-number');
  const back = document.querySelector('.headerTop__phone-text');

  if (place) {
    window.addEventListener('resize', function(event) {
      if (event.target.innerWidth < 577) {
        place.before(enter);
      } else {
        back.before(enter);
      }
    }, true);
  
    if (window. innerWidth < 577) {
      place.before(enter);
    }
  }

  // Перемещение элемента на детальной странице h1

  const placeH1 = document.querySelector('.swiperDetail2');
  const enterH1 = document.querySelector('.detailMain__title');
  const backH1 = document.querySelector('.detailMain__price');

  if (placeH1) {
    window.addEventListener('resize', function(event) {
      if (event.target.innerWidth < 993) {
        placeH1.before(enterH1);
      } else {
        backH1.before(enterH1);
      }
    }, true);
  
    if (window. innerWidth < 993) {
      placeH1.before(enterH1);
    }
  }
});
