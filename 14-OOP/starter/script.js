'use strict';

// Constructor Function
const Person = function (firstName, birthYear) {
  //Capital variable name is JS' OOP Naming Convention
  // Never use arrow functions for OOP as we need the 'this' keyword

  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a function inside a constructor, it would be the same as creating a new function each time the Object is instantiated

  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. Function is ChannelSplitterNode, this = {}
// 3. {} linked to prototype -> creates the __proto__ property
// 4. Function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes -> Each and every function in JS has this property, including constructor functions
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

// Any object always has access to the methods and properties of its prototype

console.log(jonas.__proto__);

console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo sapiens';
console.log(jonas, matilda);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// Class Expression
// const PersonCL = class {};

// Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods -> Methods that will be added to .prototype property, makes it inheritable
  calcAge() {
    // Function is already declared in the prototype, so it's not going to be recreated in every created Object.
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method -> Added to the class itself instead of the .prototype, makes it not inheritable
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ == PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

const walter = new PersonCl('Walter White', 1965);

// 1. Classes are NOT hoisted, we can't use them before declaration
// 2. Classes are first-class citizens. We can pass and return them to and from functions
// 3. Classes are executed in strict mode

// Getters and Setters -> Functions that gets and sets a value
// =================================================================
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

console.log(jessica.age);

// Static Methods
Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey();
PersonCl.hey();

// Object.create() -> Another way to do prototype inheritance, but without initial instance properties
// -----------------------------------------------------------

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // We're basically saying that PersonProto should be the prototype of steven
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// Inheritance
// ----------------
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Inheritance using class
// ------------------------
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // super() always needs to happen first -> Responsible in creating the 'this' keyword in this sub-class
    super(fullName, birthYear); // -> Replaces PersonCL.call(this, fullName, birthYear)
    this.course = course;
  }

  // We could actually have no other properties at all (no 'this.course' in this case). If that's the case, where we only maybe add new methods/functions, we don't need the constructor at all

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`,
    );
  }
}

// const martha = new StudentCl('Martha Jones', 2012) // -> For example without constructor

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

// Inheritance between 'classes' with Object.create()
// --------------------------------------------------

const StudentsProto = Object.create(PersonProto);

StudentsProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentsProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};
const jay = Object.create(StudentsProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

// Encapsulation
// ---------------
// Class Fields
// ============
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// 5) Static version of these 4

class Account {
  // 1) Public fields -> same as this.locale = navigator.language in constructor
  locale = navigator.language;
  bank = 'Banklist';
  // 2) Private fields
  #movements = [];
  #pin; //Value not defined, can define in constructor
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // #pin value definition

    console.log(`Thanks for opening an account ${owner}`);
  }

  // Public interface (API)
  // -----------------------
  getMovements() {
    return this.#movements; // Not chainable
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // => to make the methods chain-able
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // Private method
  // -------------------
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.movements = [];
acc1.requestLoan(1000);
// acc1.#approveLoan(1000); // -> inaccessible

console.log(acc1);
// console.log(acc1.#movements); -> Inaccessible
// acc1.#approveLoan(231) ->also inaccessible

const movements = acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements();

console.log(acc1);
console.log(movements);
