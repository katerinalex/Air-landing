import {Swiper} from 'swiper';

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.arrow--right',
    prevEl: '.arrow--left',
  },
});

const buttonElNext = document.querySelector('.arrow--right');
const swiperEl = document.querySelector('.swiper').swiper;


buttonElNext.addEventListener('click', () => {
  swiperEl.slideNext();
});

const buttonElPrev = document.querySelector('.arrow--left');

buttonElPrev.addEventListener('click', () => {
  swiperEl.slidePrev();
});
