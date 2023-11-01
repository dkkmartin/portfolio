import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const tl = gsap.timeline({
  defaults: { duration: 1, delay: 0.5, ease: 'elastic.out(1,1)' },
})

const tlScrollSchool = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'elastic.out(1,1)',
  },
  scrollTrigger: {
    trigger: '.section__school',
    start: 'top top',
    end: 'center center',
  },
})

const tlScrollProjects = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'elastic.out(1,1)',
  },
  scrollTrigger: {
    trigger: '.section__projects',
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
tlScrollSchool
  .fromTo('.section__school h2', { opacity: 0 }, { opacity: 1 })
  .to('.section__school h2', { left: '20%', ease: 'power1.out' })
  .fromTo(
    '.images__div',
    { opacity: 0, x: 1000 },
    { opacity: 1, x: 0, ease: 'power1.out', duration: 1.2 },
    '-=1.1'
  )
  .to('.section__school h2', { opacity: 0, delay: 0.2, duration: 2 })
  .fromTo('.h3__first', { opacity: 0 }, { opacity: 1 }, '-=1.5')
  .fromTo(
    '.ul__first > *',
    { opacity: 0, scale: 0, rotate: 180 },
    {
      scale: 1.2,
      rotate: 0,
      opacity: 1,
      stagger: {
        each: 0.15,
        from: 'start',
        grid: 'auto',
        ease: 'power2.inOut',
      },
    },
    '-=1'
  )
  .fromTo('.h3__second', { opacity: 0 }, { opacity: 1 }, '+=0.3')
  .fromTo(
    '.ul__second > *',
    { opacity: 0, scale: 0, rotate: 180 },
    {
      scale: 1.2,
      rotate: 0,
      opacity: 1,
      stagger: {
        each: 0.15,
        from: 'start',
        grid: 'auto',
        ease: 'power2.inOut',
      },
    },
    '-=0.3'
  )

tlScrollProjects
  .fromTo(
    '.projects__h3',
    {
      opacity: 0,
    },
    { opacity: 1, duration: 1.5 }
  )
  .to('.projects__h3', { opacity: 0 })
  .fromTo('.mySwiper', { opacity: 0 }, { opacity: 1 }, '-=0.5')
