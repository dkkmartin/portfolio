import './index.css';
import Letterize from 'letterizejs';
import anime from 'animejs';

let titleHi = new Letterize({
  targets: '.hero__title',
});

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
    targets: titleHi.listAll,
    delay: anime.stagger(50),
    opacity: [0, 1],
  }).add({
    targets: titleHi.listAll,
    translateX: '-320',
  })
  .add({
    targets: titleMartin.listAll,
    delay: anime.stagger(50),
    opacity: [0, 1],
  }).add({
    targets: '.image_headshot',
    opacity: [0, 1]
  })
  .add({
    targets: '.hero__martin',
    translateX: 2000,
    easing: 'easeInExpo',
    complete: function () {
      const titleMartin = document.querySelector('.hero__martin');
      titleMartin.textContent = 'I study web development';
    },
  })
  .add(
    {
      targets: '.hero__title',
      opacity: 0,
    },
    '-=1000'
  )
  .add(
    {
      targets: '.hero__martin',
      translateX: [-2000, 0],
      easing: 'easeOutQuint',
    },
    '+=300'
  );
