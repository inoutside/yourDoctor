//import * as flsFunctions from "./modules/functions.js";
//import "./swiper-bundle.js";

//Проверка поддержки webp, добавление класса webp или no-webp для HTML
function isWebp() {
    //Проверка поддержки webp
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    //Добавление класса webp или no-webp для HTML
    testWebP(function (support) {
        if (support == true) {
        document.querySelector('body').classList.add('webp');
        }else{
        document.querySelector('body').classList.add('no-webp');
        }
        });
}

//меню бургер
if (document.querySelector('.menu__icon')) {
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.header__right');
    const contacts = document.querySelector('.header-right__contacts');
    const buttons = document.querySelector(".header-right__buttons")
    const times = document.querySelector(".header-right__times")
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        contacts.classList.toggle('_active');
        buttons.classList.toggle('_active');
        times.classList.toggle('_active');
    });
}

//select
const elements = document.querySelectorAll('.form__select');
elements.forEach(el => {
  const choices = new Choices(el, {
    searchEnabled: false,
  });
})

//стрелка подменю
let menuArrows = document.querySelectorAll('.menu__arrow');
if (menuArrows) {
    if (menuArrows.length > 0){
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function (e){
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
}

//слайдеры
if (document.querySelectorAll('.first-slider').length != 0) {
    new Swiper('.first-slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        simulateTouch: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoHeight: false,
        on: {
            init() {
              this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
              });
        
              this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
              });
            }
          },
    });
}

if (document.querySelectorAll('.second-slider').length != 0) {
    new Swiper('.second-slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        simulateTouch: true,
        slideToClickedSlide: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        on: {
            init() {
              this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
              });
        
              this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
              });
            }
          },
    });
}

if (document.querySelectorAll('.third-slider').length != 0) {
    new Swiper('.third-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        loopedSlides: 1,
        breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            loopedSlides: 2,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
          loopedSlides: 3,
        }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        simulateTouch: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        speed: 800,
        watchOverflow: true,
        loop: true,
        on: {
            init() {
              this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
              });
        
              this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
              });
            }
          },
    });
}

if (document.querySelectorAll('.reviews-slider').length != 0) {
    new Swiper('.reviews-slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        simulateTouch: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        speed: 800,
        loop: true,
        watchOverflow: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loopedSlides: 1,
        breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 10,
            loopedSlides: 2,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
          loopedSlides: 3,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            loopedSlides: 4,
          }
        },
        on: {
            init() {
              this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
              });
        
              this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
              });
            }
          },
    });
}

if (document.querySelectorAll('.service-explain').length != 0) {
    new Swiper('.service-explain', {
        simulateTouch: true,
        slideToClickedSlide: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init() {
              this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
              });
        
              this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
              });
            }
          },
    });
}

if (document.querySelectorAll('.about-photogallery-slider').length != 0) {
    new Swiper('.about-photogallery-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        loopedSlides: 1,
        breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            loopedSlides: 2,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          loopedSlides: 3,
        }
        },
        simulateTouch: true,
        slideToClickedSlide: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        speed: 800,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init() {
              this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
              });
        
              this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
              });
            }
          },
    });
}

//кнопка вверх
const offset = 100;
const scrollUp = document.querySelector(".scroll-up");

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
    if (getTop() > offset) {
        scrollUp.classList.add('_active')  
    } else{
        scrollUp.classList.remove('_active')  
        scrollUp.classList.remove('_hover'); 
    }
});

scrollUp.addEventListener('click', () => {
    scrollUp.classList.remove('_active');
    scrollUp.classList.add('_hover'); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

//маска для телефона
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
let phones = document.querySelectorAll('#formPhone');
if (phones) {
    if (phones.length > 0){
        for (let index = 0; index < phones.length; index++) {
            const phone = phones[index];
            var mask = IMask(phone, maskOptions);
        }
    }
}



function textCheckbox() {
  if (document.querySelectorAll('#spoiler3').length != 0) {
    let checkbox = document.getElementById('spoiler3');
    let label = document.querySelectorAll('.change-text');
    if (checkbox.checked) {
      label[0].innerHTML = 'Раскрыть все отзывы<span class="icon-arrow2"></span>';
    } else {
      label[0].innerHTML = 'Скрыть все отзывы<span class="icon-arrow2"></span>';
    }
  }
}

