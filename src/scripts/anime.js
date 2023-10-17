import Letterize from 'letterizejs';
import anime from 'animejs';

const titleMartin = new Letterize({
  targets: '.hero__martin',
});

var animation = anime.timeline({
  easing: 'easeInOutExpo',
  duration: 500,
  delay: 500,
});

animation
  .add({
    targets: '.hero__title',
    opacity: [0, 1],
  })
  .add({
    targets: '.hero__title',
    translateX: '-145',
  })
  .add({
    targets: titleMartin.listAll,
    delay: anime.stagger(50),
    translateY: [-100, 0],
    opacity: [0, 1],
  }).add({
    targets: '.image__headshot',
    opacity: [0, 1],
    duration: 1000
  }).add({
    targets: '#mouse-scroll',
    opacity: [0, 1]
  })
