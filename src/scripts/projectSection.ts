import Swiper from 'swiper'
import { Mousewheel, EffectCards, Navigation } from 'swiper/modules'

const swiper = new Swiper('.swiper', {
  modules: [Mousewheel, EffectCards, Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  effect: 'cards',
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
