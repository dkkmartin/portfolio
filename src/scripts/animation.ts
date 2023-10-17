import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const tl = gsap.timeline()

tl.fromTo('.hero__title', { opacity: 0 }, { y: 0 })
  .to('.hero__title', { opacity: 1, duration: 1, ease: 'power3.out' })
  .fromTo('.hero__martin', { opacity: 0 }, { y: 1000 }, '-=1')
  .to('.hero__martin', { opacity: 1, y: -60, duration: 0.8 })
  .to('.hero__martin', { y: 0, duration: 0.3 })
  .to('.hero__title', { y: -10, duration: 0.2 }, '-=0.3')
  .to('.hero__title', { y: -20, x: -10, duration: 0.2 }, '-=0.3')
