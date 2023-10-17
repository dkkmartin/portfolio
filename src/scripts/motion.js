import {animate, scroll, inView} from 'motion'

scroll(animate("#progress", {scaleX: [0, 1]}))

inView(".section__animation", ({ target }) => {
  animate(
    target.querySelector("h1"),
    { opacity: 1, transform: "none" },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  )
  animate(
    target.querySelector('h2'),
    { opacity: 1, transform: "none" },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  )
});