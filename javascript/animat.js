import { animate, stagger, splitText } from 'https://esm.sh/animejs'

const text = document.querySelector('.text-xl')
const { chars } = splitText('h2', { words: false, chars: true })
text.addEventListener('mouseover', event =>
  animate(chars, {
    // Property keyframes
    y: [
      { to: '5rem', ease: 'outExpo', duration: 600 },
      { to: 0, ease: 'outBounce', duration: 800, delay: 50 }
    ],
    // Property specific parameters
    rotate: {
      from: '-1turn',
      delay: 0
    },
    delay: stagger(50),
    ease: 'inOutCirc',
    loopDelay: 1000,
    loop: 1
  })
)
const box = document.querySelector('.box')
box.addEventListener('click', event =>
  animate(box, {
    // Animatable properties
    backgroundColor: 'hsl(300, 76%, 72%)',
    borderRadius: '50%',
    translateX: '-50px',
    translateY: '50px',
    rotate: '360deg',
    // Playback settings
    duration: 500,
    ease: 'inOut',
    loop: 1,
    alternate: true
  })
)
