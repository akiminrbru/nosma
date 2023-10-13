document.addEventListener("DOMContentLoaded", () => {

  // Маска телефона

  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

});

  // Свайперы

  const swiperBanner = new Swiper('.swiperBanner', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    watchOverflow: true,
    centeredSlides: true,
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

  const place = document.querySelector('.headerBottom__callback-wrapper');
  const enter = document.querySelector('.headerTop__phone-number');
  const back = document.querySelector('.headerTop__phone-text');

  if (place) {
    window.addEventListener('resize', function(event) {
      if (event.target.innerWidth < 577) {
        place.append(enter);
      } else {
        back.before(enter);
      }
    }, true);
  
    if (window. innerWidth < 577) {
      place.append(enter);
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

  // Выпадающее меню

  let btn_catalog = document.querySelector('.headerBottom__catalogMain');
  let subCatalog = document.querySelector('.headerBottom__catalogSub');

  if (btn_catalog) {
    btn_catalog.addEventListener('mouseover', () => {
      subCatalog.classList.add('headerBottom__catalogSub-active');
    }); 

    btn_catalog.addEventListener('mouseout', () => {
      subCatalog.classList.remove('headerBottom__catalogSub-active');
    }); 
  }

  if (subCatalog) {
    subCatalog.addEventListener('mouseover', () => {
      subCatalog.classList.add('headerBottom__catalogSub-active');
    }); 

    subCatalog.addEventListener('mouseout', () => {
      subCatalog.classList.remove('headerBottom__catalogSub-active');
    }); 
  }

  // Перемещение элемента Спика каталога

  const place3 = document.querySelector('.headerBurger__inner');
  const enter3 = document.querySelector('.headerBottom__nav');
  const back3 = document.querySelector('.headerBottom__logo-wrapper');

  if (place3) {
    window.addEventListener('resize', function(event) {
      if (event.target.innerWidth < 993) {
        place3.prepend(enter3);
      } else {
        back3.after(enter3);
      }
    }, true);
  
    if (window.innerWidth < 993) {
      place3.prepend(enter3);
    }
  }

  // Перемещение элемента Заказать звонок

  const place4 = document.querySelector('.headerBurger__call');
  const enter4 = document.querySelector('.headerBottom__callback');
  const back4 = document.querySelector('.headerBottom__callback-wrapper');

  if (place4) {
    window.addEventListener('resize', function(event) {
      if (event.target.innerWidth < 577) {
        place4.append(enter4);
      } else {
        back4.append(enter4);
      }
    }, true);
  
    if (window.innerWidth < 577) {
      place4.append(enter4);
    }
  }

  // Бургер меню

  let burger_btn = document.querySelector('.headerBottom__btn');
  let burger_close = document.querySelector('.headerBottom__close');
  let bodyTag = document.querySelector('body');

  let burger_menu = document.querySelector('.headerBurger');
  
  if (burger_btn) {
    burger_btn.addEventListener('click', () => {
      burger_btn.classList.toggle('active');
      burger_close.classList.toggle('active');
      bodyTag.classList.toggle('active');

      burger_menu.classList.toggle('active');
    });
  }
  if (burger_close) {
    burger_close.addEventListener('click', () => {
      burger_btn.classList.toggle('active');
      burger_close.classList.toggle('active');
      bodyTag.classList.toggle('active');
      
      burger_menu.classList.toggle('active');
    });
  }

  // Подкаталог мобильный

  let catalogRight = document.querySelector('.headerBottom__catalogRight');
  let catalogLeft = document.querySelector('.headerBottom__catalogSub-back');

  if (catalogRight) {
    catalogRight.addEventListener('click', () => {
      subCatalog.classList.add('headerBottom__catalogSub-active');
    });
  }
  
  if (catalogLeft) {
    catalogLeft.addEventListener('click', () => {
      subCatalog.classList.remove('headerBottom__catalogSub-active');
    });
  }


  // Открытие попап

  let callback = document.querySelector('.headerBottom__callback');
  let popup = document.querySelector('.mainPopup');
  let closePopup = document.querySelector('.mainPopup__close');
  let popupInner = document.querySelector('.mainPopup__inner');

  if (callback) {
    callback.addEventListener('click', () => {
      popup.classList.add('active');
    });
  }

  if (closePopup) {
    closePopup.addEventListener('click', () => {
      popup.classList.remove('active');
      popupSucces.classList.remove('active');
    });
  }

  if (popup) {
    popup.addEventListener('click', () => {
      popup.classList.remove('active');
      popupSucces.classList.remove('active');
    });
  }

  if (popupInner) {
    popupInner.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  // Отправка формы "Попап"

  const postData = async (url, data) => {
    let res = await fetch(url, {
        method: 'POST',
        body: data,
    });

    return await res;
  };    
  
  let popupForm = document.querySelector('.mainPopup__form');
  let pupupBtn = document.querySelector('.mainPopup__btn');
  let inputs = popupForm.querySelectorAll('input');
  let popupWarning = document.querySelector('.mainPopup__warning');
  let popupWrap = document.querySelector('.mainPopup__wrapper');
  let popupLoading = document.querySelector('.mainPopup__loading');

  let popupSucces = document.querySelector('.mainPopup__success');

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    })
  };

  let popupData = '';

  let checked = false;

  if (pupupBtn) {
    pupupBtn.addEventListener('click', (e) => {
      e.preventDefault();
  
      inputs.forEach(el => {
        if (el.value == '') {
          popupWarning.classList.add('active');
        } else {
          popupWarning.classList.remove('active');
          checked = true;
        }
      });

      if (checked == true) {
        popupData = new FormData(popupForm);
        popupWrap.classList.add('send');
        popupLoading.classList.add('send');
        
        postData('send.php', popupData).then((res) => {
          popupWrap.classList.remove('send');
          popupLoading.classList.remove('send');
          popupSucces.classList.add('active');
          console.log(res);
        })
        .catch((e) => {
            console.log(e);
            popupWrap.classList.remove('send');
            popupLoading.classList.remove('send');
        })
        .finally(() => {
          clearInputs();
        });
      }

    });
  }
});
