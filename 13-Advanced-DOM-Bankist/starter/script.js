'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Implementing smooth scrolling
btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth,
  // );

  // Scrolling
  // ============
  // Old School Way
  // -----------------
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset,
  // );
  // OR
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // Modern Way
  // ------------
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation (Event Delegation w/ Event Bubbling)
// -----------------------------------------------------
// Without Event Delegation:
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// With Event Delegation:
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
// N1. This makes it so that there's only one event listener on the parent, instead of having on event listener for each link which will impact the performance
// N2. Event Delegation is also the only way to 'add' an event listener to a child element that has not yet been generated

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    console.log('LINK');
    const id = e.target.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed Component
// ------------------
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause -> An if statement which returns early when a certain condition is matched
  if (!clicked) return;

  // Active Tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate Content Area
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
// 'mouseover' and 'mouseout' are like 'mouseenter' and 'mouseleave'. But 'mouseenter' and 'mouseleave' can't bubble

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibilings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    sibilings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky Navigation
// ---------------------
// Vanilla version => Not good as scroll event always get executed, which would deteriorate performance
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function (e) {
//   console.log(this.window.scrollY);
//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Using the Intersection Observer API
// const obsCallback = function (entries, observer) {
//   //This function will be called each the target element is intersecting the root element at the threshold that we defined.
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// observer.observe(section1); //Observes target element

// const observer = new IntersectionObserver(obsCallback, obsOptions);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Scrolling Animation - Reveal Sections
// ------------------------------------------
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  console.log(entries);
  // const [entry] = entries;
  entries.forEach(entry => {
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Sliders
const sliders = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`,
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - curSlide) * 100}%)`),
    );
  };

  const nextSlide = function () {
    if (curSlide == maxSlide - 1) curSlide = 0;
    else curSlide++;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      console.log('DOT');
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};

sliders();

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections); // -> Results in NodeList

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons); // -> Results in HTMLCollection, which (unlike NodeList) automatically updates itself when the related elements are updated.

// console.log(document.getElementsByClassName('btn'));

//Creating & Inserting Elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);
// header.append(message);
// //If we use prepend(), then append(), or do any insertion of elements, instead of creating 2 elements, it will move the first one to the append() one.
// To create 2 same elements use this below:
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message)
// insertAdjacentHTML(position, text) // -> position can be 'beforebegin', 'afterbegin', 'beforeend', and 'afterend'

// Delete Elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove(); // -> remove() method is very recent

// Old Way
// message.parentElement.removeChild(message);
// });

// Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// message.style.paddingTop = message.style.paddingBottom = '1rem';

// console.log(message.style.color); // -> Doesn't show anything because we didn't set it ourselves
// console.log(message.style.backgroundColor);

// If you still want to get the value:
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// Non-standard Attributes
// console.log(logo.designer); // -> doesn't work, use below instead
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src); // -> Absolute value
// console.log(logo.getAttribute('src')); // -> Relative value

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// Data attributes
// console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');
//logo.className = 'Jonas'; // -> Don't use as this will OVERWRITE all classes

// Event Types & Event Handlers
// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//Like CSS' hover
// alert(`addEventListener: Great! You are reading the heading :D`);

// Remove Event Listener
// ----------------------
// h1.removeEventListener('mouseenter', alertH1);
// };

// Add Event Listener
// ---------------------
// h1.addEventListener('mouseenter', alertH1);

// Old School Way
// -----------------
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// Other ways to remove event listeners
// ---------------------------------------
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// It's better to use addEventListener() as it allows us to add multiple actions to the same event. If we use the old school way, the newest code will instead overwrite the old one.

// Event Capturing & Bubbling
// 1. When we click on a link that has an event attached to it, the Document will generate a CLICK Event.

// 2. The CLICK Event will then traverse down from the Document, to its child element continuosly until it arrives at the target element. This is called the CAPTURING phase.

// 3. As it enters the target element, it will change into BUBBLING phase. The target element will then CAPTURE the event and the corresponding actions will be executed

// 4. After execution, the CLICK event will traverse back up to its parent element continuosly until it arrives back at the Document. This is the core action the BUBBLING phase.

// N1. When the CLICK Event traverses through the parent elements in the CAPTURING phase. It's as if the event also happened in the traversed parent elements.
// N2. So if there are two event listeners with the same actions in the target element and its parent element, if we click on the target element, the event is executed twice (once in the parent element and another in the target element).
// N3. The traversing of events through the elements are called as Event PROPAGATION
// N4. The addEventListener() method only listens to the events that are in the BUBBLING Phase (By Default). We can set it to capture during the CAPTURING phase by doing x.addEventListener('event_type', action, true) -> true makes it listen to the CAPTURING phase

// Event Propagation in Practice
// ------------------------------
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log((this.style.backgroundColor = randomColor()));
//   console.log('LINK', e.target, e.currentTarget);

// Stop propagation
// ----------------
// e.stopPropagation() -> Stops the event from happening to the parent element(s)
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log((this.style.backgroundColor = randomColor()));
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log((this.style.backgroundColor = randomColor()));
//   console.log('NAV', e.target, e.currentTarget);
// });

// DOM Traversing
// ---------------
// const h1 = document.querySelector('h1');

// Going downwards: child
// ------------------------
// console.log(h1.querySelectorAll('.highLight'));
// This goes down to any element no matter how deep

// console.log(h1.childNodes);
// console.log(h1.children);
// These only works for DIRECT children

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
// -----------------------
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// These returns DIRECT parent element

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// This goes as high as it can until it finds the element

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: sibilings
// ---------------------------
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// Lifecycle DOM Events
// ========================
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML Parsed and DOM Tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded including external images, etc', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault(); // Some browsers require this, chrome does not
//   console.log('Users would like to leave the page', e);
//   e.returnValue = '';
// });
