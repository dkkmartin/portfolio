import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const tl = gsap.timeline({
  defaults: { duration: 1, delay: 0.5, ease: 'elastic.out(1,1)' },
})

tl.fromTo('.hero__title', { opacity: 0 }, { opacity: 1 })
  .fromTo(
    '.hero__martin',
    { opacity: 0, x: -1000 },
    { opacity: 1, x: 0 },
    '-=.5'
  )
  .fromTo(
    '.image__headshot',
    { opacity: 0, x: 2000 },
    { opacity: 1, x: 200 },
    '-=1'
  )
  .to('.hero', { x: -300 }, '-=1.25')
  .fromTo('#mouse-scroll', { opacity: 0 }, { opacity: 0.5 })
