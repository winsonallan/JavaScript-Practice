'use strict';
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

//Copy Array
const mainMenuCopy = [...restaurant2.mainMenu];
console.log(mainMenuCopy);

// Join 2 Arrays
const menuJoin = [...restaurant2.starterMenu, ...restaurant2.mainMenu];
console.log(menuJoin);
