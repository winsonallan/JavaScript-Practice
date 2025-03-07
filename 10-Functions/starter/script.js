'use strict';

const bookings = [];

// Default Parameters
const createBooking = function (
  flightNum = 1,
  numPassengers = 199,
  price = 199 * numPassengers,
) {
  // ES5 Way
  // ----------
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

// Passing By Value VS Reference
const flight = 'LH1234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 248391723,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = 'LH999'), (passenger.name = 'Mr. ' + passenger.name);

  //   if (passenger.passport === 248391723) {
  //     alert('Checked In');
  //   } else {
  //     alert('Wrong Passport!');
  //   }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

// Passed Primitives Are Only Value Passed. Others like Objects looks like they are Passed by Reference even though the passed thing is the reference value (the address to that Object), NOT the object itself.

// First Class Functions
// ==========================
// functions are treated as first-class citizens. Meaning they are SIMPLY VALUES. Meaning they are just another 'type' of object

// functions can be stored inside variables or properties
// functions can be passsed as arguments to other functions
// functions can be returned from functions
// methods can be called on functions, such as bind()

// First class functions make HIGHER-ORDER FUNCTIONS possible

// Higher Order Functions
// ==============================
// A function that receives another function as an argument, that returns a new function, or both. The functino that is passed as an argument to another function is called as CALLBACK FUNCIONS

// Example 1
// -------------
// const greet = () => console.log('Hi there');
// btnClose.addEventListener('click', greet)
// greet() is a First Class Function, while addEventListener() is a Higher-Order Function

// Example 2
// -------------
// function count() {
//     let counter = 0;
//     return function () {
//         counter ++;
//     }
// }
// In this case, count() is the Higher-Order Function

// Functions Calling Other Functions
// ---------------------------------------
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// Functions Returning Function
// --------------------------------
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greet('Hey')('Jonas');

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('Hi')('Jonas');

// Call & Apply Methods
// -----------------------

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: `Eurowings`,
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Call Method
// ---------------
// call() assigns the 'this' keyword to the stated object
//Syntax -> function.call(object name, ...function parameters)
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: `Swiss Air`,
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 65, 'Mary Jane');
console.log(swiss);

// Apply Method
// ----------------
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// apply() does the same thing as call(). It just doesn't get the list of arguments/parameters after the object name. It takes an array containing those parameters instead.

// now the apply() method is no longer used as much as we can just do this:
// book.call(swiss, ...flightData)

// Bind Method
// --------------
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

// returns a NEW FUNCTION where the 'this' keyword is already assigned to the stated Object. In this case, the object is 'eurowings'

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Betty Brunna');

// When we already applied some of the arguments/parameters to a function, we call that as partial application

// With Event Listeners
// -----------------------
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// We gotta use bind in the above example as the 'this' keyword is now assigned to the button with the class of 'buy'. Hence we need to reassign the 'this' keyword to the lufthansa object

// Partial Application (Preset parameters)
// -----------------------

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// IIFE (Immediately Invoked Function Expressions)
// ====================================================
// Function that is only executed once

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate); -> the isPrivate variable is not accessible

(() => console.log('This will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(notPrivate);

// Closures
// ==================
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// The reason why the 'passengerCount' still gets updated is because of closures.
// Remember, JS sees functions as values, so now booker stores the function(){...}
// This function still 'remembers', still has the reference towards the 'passengerCount' variable.
// This is why the passengerCount is still updated
//The Closure is then basically the variable environment attached to the return function, exactly as it was at the time and place that the function was created.
//We can say that the booker function closed over its parent's scope or over its parent's variable environment.
// This variable environment stays with the booker function forever, unless we now set the booker's value to null

// When booker() is executed:
// 1. The function attempts to increase the passengerCount variable
// 2. The variable is however, not in the function's scope. Hence, JS will look at the closure and see if it can find the variable there.
// 3. It finds the variable, the variable gets incremented

// Definitions of Closures
// - Closed-over variable environment of the execution context in which a function was created, even after that execution context is gone (Formal Definition)
// - A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time (Less Formal)
// - A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place (Even less formal)
// - A closure is like a backpack that a function carries wherever it goes. This backpack has all the variables that were present in the environment whre the function was created. (Even less less formal)

// The closure is automatically created by JavaScript as a feature. We can't even access closed-over variables explicitly.
// A closure is NOT a tangible JavaScript object

// We can look at the internal property, the 'backpack', by doing this below:

console.dir(booker);

// Other Closures Examples
// ==========================

// Example 1a
// -------------
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();

console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 1000 * wait);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1500; // Closures have priority over the scope chain
boardPassengers(180, 3);
