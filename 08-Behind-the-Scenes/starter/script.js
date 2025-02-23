'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a - b;
      }

      console.log(add(1, 4));
    }

    console.log(millenial);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// var is function scoped only. It ignores block scopes unlike let and const. This is why the variable 'millenial is still accessible in the console.log();
// functions are both block and function scoped

//Hoisting = Makes some types of variables accessible before declaration

// function and var declarations are hoisted. Let and const are not

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

// in the above code the variable 'me' is accessible even tho it's undefined

console.log(addDoc1(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

function addDoc1(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// only function declarations can be used before declaration

if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

// variables declared with var are written in the window property when we put 'window' in the console

// 'This' keyword
console.log('this1: ' + this);

function this2() {
  console.log('this2: ' + this);
}
this2();

const this3 = () => {
  console.log('this3: ' + this);
};
this3();

const testObject = {
  year: 1991,
  testFunction: function () {
    console.log(this);
  },
};

testObject.testFunction();

const testObject2 = {
  year: 2000,
};

testObject2.testFunction = testObject.testFunction;
testObject2.testFunction();

const fTestFunction = testObject.testFunction;
fTestFunction();

console.log('This -> Part 2');

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

var firstNameGlobal = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAgeThis: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    const self = this; // self or that
    const isMillenial1 = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial1();

    // Solution 2
    const isMillenial2 = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial2();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAgeThis();

// arguments keyword
const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr2(2, 5);
addExpr2(2, 5, 8, 12);

var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8); //arow function ain't get it's own 'arguments' keyword

///////////////////////////////////////
// Object References in Practice (Shallow vs. Deep Copies)

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

const marriedJessica2 = jessica1;
marriedJessica2.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);
console.log('After2:', marriedJessica2);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  familiy: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

jessicaCopy.familiy.push('Mary');
jessicaCopy.familiy.push('John');

console.log('Before:', jessica);
console.log('After:', jessicaCopy);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.familiy.push('Mary');
jessicaClone.familiy.push('John');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
