const hotelName = document.querySelector('.hotel-name');
anime({
  targets: hotelName,
  keyframes: [
    {translateY: -20},
    {translateX: 75},
    {translateY: 30},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
});