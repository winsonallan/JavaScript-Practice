'use strict';

// Object Destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;

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

restaurant.orderDelivery({
  time: '22:00',
  address: 'Via de Solle, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
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

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);
