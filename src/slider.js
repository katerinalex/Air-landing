import {Swiper, Navigation, Observer, ObserveParents, Parallax} from 'swiper';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // direction: 'horizontal',
  loop: true,
  // cssMode: true,
  // observer: true,
  // observeParents: true,
  // parallax:true,
  // // observeSlideChildren: true,
  // modules: [Navigation, Parallax, Observer, ObserveParents],

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// import { Swiper, Parallax, Navigation} from 'swiper'
// Swiper.use([ Parallax, Navigation ])

// document.addEventListener('DOMContentLoaded', () => {
//   const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     speed: 2400,
//     parallax: true,
//     observeParents: true,
//     observer: true,
//     modules: [Navigation],

//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
// })
