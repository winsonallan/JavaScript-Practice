'use strict';

// Array Destructuring
const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Vegetarian', 'Pizzeria', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`,
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main, secondary] = restaurant2.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant2.order(2, 0);
console.log(starter, mainCourse);

// Nested Array Destructuring
const nested = [2, 3, [4, 5]];
const [i, , j] = nested;
console.log(i, j);

const [k, , [l, m]] = nested;
console.log(k, l, m);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// ----------------------------------

// Object Destructuring
const { name, openingHours, categories } = restaurant2;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant2;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant2;

console.log(menu, starters);

// Mutating Object Destructuring Variables

let a2 = 111,
  b2 = 999;

const obj = { a2: 23, b2: 7, c2: 14 };
({ a2, b2 } = obj);
console.log(a2, b2);

//Nested Objects

const {
  fri: { open: o, close: c3 },
} = openingHours;

console.log(o, c3);

restaurant2.orderDelivery({
  time: '22:00',
  address: 'Via de Solle, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant2.orderDelivery({
  time: '21:30',
  address: 'Elmo Street',
});

const badArrExample = [7, 8, 9];
const badNewArr = [1, 2, badArrExample[0], badArrExample[1], badArrExample[2]];
console.log(badNewArr); //Works, but a hassle to do

const betterNewArr = [1, 2, ...badArrExample];
console.log(betterNewArr);

console.log(...betterNewArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant2.mainMenu, 'Gnocchi'];
console.log(newMenu);

//Copy Array
const mainMenuCopy = [...restaurant2.mainMenu];
console.log(mainMenuCopy);

// Join 2 Arrays
const menuJoin = [...restaurant2.starterMenu, ...restaurant2.mainMenu];
console.log(menuJoin);

// Spread operators (...) are usable on iterables (arrays, oneStarRatings, maps, sets, BUT NOT objects)

const strExample = 'Jonas';
const lettersIter = [...strExample, ' ', 'S.'];
console.log(lettersIter);
console.log(...strExample);

// We can't use spread operators in template literals

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant2.orderPasta(...ingredients);

const newRestaurant2 = {
  foundedIn: 1991,
  ...restaurant2,
  founderName: 'Giuseppe Magniollo',
};

console.log(newRestaurant2);

// Rest Patterns -> Opposite of spread operator which unpacks arrays, rest patterns instead packs elements into an array

// The example below is SPREAD as the operator (...) is on the right side of the '=' sign.

const spread = [1, 2, ...[3, 4]];
console.log(spread);

// The example below is REST PATTERN as the operator (...) is on the left side of the '=' sign.

const [aRest, bRest, ...othersRest] = [1, 2, 3, 4, 5];
console.log(othersRest);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant2.mainMenu,
  ...restaurant2.starterMenu,
];

console.log(pizza, risotto, otherFood);

// For REST PATTERNS, they should always be placed in the end of the Array. Also, there should always only be one REST PATTERN at a time

// Objects
const { sat, ...weekdays } = restaurant2.openingHours;
console.log(weekdays);

// REST PARAMETERS in Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3, 4);
add(1, 5, 2, 6, 3);

const x2 = [19, 29, 30];
add(...x2);

restaurant2.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant2.orderPizza('mushroom');

// Short Circuiting
// Use ANY data type, return ANY data type
// OR '||' -> If the first value is a truthy one, it will return it
// AND '&&' -> Returns first falsy or the last element if all the elements are truthy

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

// Short Circuits can be used to shorten ternary and if-else conditionals

if (restaurant2.orderPizza) {
  restaurant2.orderPizza('mushrooms', 'spinach');
}

restaurant2.orderPizza && restaurant2.orderPizza('mushrooms', 'spinach');

// The Nullish Coalescing Operator (??)
// This operator works with NULLISH values instaed of FALSY values
// NULLISH values -> null & undefined

const guests = restaurant2.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant2.newGuests ?? 10;
console.log(guestCorrect);

// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
console.log(rest2);

// With Logical Assignment Operators, the rest1.numGuests = rest1.numGuests || 10; could be shortened

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

//  Logical Assignment Operators can also be used with Nullish Coalescing Operator (??=) and the AND operator (&&=)
