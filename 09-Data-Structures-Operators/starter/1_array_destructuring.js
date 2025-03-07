'use strict';

// Array Destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
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
