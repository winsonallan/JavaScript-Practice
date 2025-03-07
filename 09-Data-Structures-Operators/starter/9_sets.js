'use_strict';

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

console.log(ordersSet);

ordersSet.delete('Risotto');

// ordersSet.clear(); //clears the whole content of the set;

// You can't retrieve specific data from sets. If you wanna do that, use arrays instead.

for (const order of ordersSet) console.log(order);

// Main use of sets is to remove duplicates in arrays.

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size,
);

console.log(new Set('jonasschmedtmann').size);
