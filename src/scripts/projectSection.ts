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

const cards = document.querySelectorAll<HTMLElement>('.card__video')

cards.forEach((element) => {
  const img = element.querySelector('img') as HTMLImageElement
  const video = element.querySelector('video') as HTMLVideoElement
  img.addEventListener('mouseenter', () => {
    img.style.display = 'none'
    video.style.display = 'block'
    video.play()
  })
  video.addEventListener('mouseleave', () => {
    img.style.display = 'block'
    video.style.display = 'none'
    video.pause()
  })
})
