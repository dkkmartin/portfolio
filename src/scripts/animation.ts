import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const tl = gsap.timeline({
  defaults: { duration: 1, delay: 0.5, ease: 'elastic.out(1,1)' },
})

const tlScroll = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'elastic.out(1,1)',
  },
  scrollTrigger: {
    trigger: '.section__scrollTrigger',
    start: 'top top',
    end: 'center center',
  },
})

// Hero animations
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

// School scrollTrigger
tlScroll
  .fromTo('.section__scrollTrigger h2', { opacity: 0 }, { opacity: 1 })
  .to('.section__scrollTrigger h2', { left: '20%', ease: 'power1.out' })
  .fromTo(
    '.images__div',
    { opacity: 0, x: 1000 },
    { opacity: 1, x: 0, ease: 'power1.out', duration: 1.2 },
    '-=1.1'
  )
  .to('.section__scrollTrigger h2', { opacity: 0, delay: 0.2, duration: 2 })
  .to('.section__scrollTrigger h2', { text: 'I am learning about' }, '-=1.5')
  .to('.section__scrollTrigger h2', { top: '5%' }, '-=1.5')
  .to('.section__scrollTrigger h2', { opacity: 1 }, '-=1')
