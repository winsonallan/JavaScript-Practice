'use strict';
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
