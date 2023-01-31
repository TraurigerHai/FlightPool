const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true,
  },
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

// const regButton = document.querySelector('#reg-button');
// const vis = document.querySelector('.vis');
// const logButton = document.querySelector('#log-button');
// const modal = document.querySelector('.modal');
// const login = document.querySelector('.login');
// const register = document.querySelector('.register');
// const buttonClose = document.querySelector('.close');
// // log
// logButton.addEventListener('click', function(event) {
//   modal.classList.add('is-open');
// });
// logButton.addEventListener('click', function(event) {
//   login.classList.add('vis');
// });
// // reg
// regButton.addEventListener('click', function(event) {
//   login.classList.remove('vis');
// });
// regButton.addEventListener('click', function(event) {
//   register.classList.add('vis');
// });
// // close
// buttonClose.addEventListener('click', function(event) {
//   modal.classList.remove('is-open');
//   login.classList.remove('vis');
//   register.classList.remove('vis');
// });