'use strict';
// Optional Chaining

// If a certain property doesn't exist, then 'undefined' is immediately returned
console.log(restaurant.openingHours.mon?.open);
// In the above example, if the 'mon' property does not exist inside the 'openingHours' property, the 'open' will not be read. This makes the code less error prone.

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant3.openingHours2[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining on Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Optional Chaining on Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

// If not using optional chaining, it would be like this:
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array empty');
}
