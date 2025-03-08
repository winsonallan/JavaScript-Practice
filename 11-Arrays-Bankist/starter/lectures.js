/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice()
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// splice() -> Same like slice() but does the process to the original array
console.log(arr.splice(2));
console.log(arr);

// reverse() -> reverses the order of the contents in an Array
const arr2 = ['j', 'k', 'l', 'm', 'n'];
console.log(arr2.reverse());

// concat() -> combines 2 arrays into 1 array
const letters = arr.concat(arr2);
console.log(letters);

// join() -> combines 2 arrays into a string
console.log(letters.join('-'));

// at() -> returns elements at given index
arr = [23, 11, 64];
console.log(arr.at(0));
// Getting the last element
console.log(arr.slice(-1)[0]);
// to
console.log(arr.at(-1));
// at() method also works on strings
console.log('jonas'.at(-1));

// forEach() on arrays
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${movement}`);
//   }
// });

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// You can't use 'continue;' nor 'break;' in a forEach() loop

// forEach() on maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// forEach() on sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Sets dont have keys, but the format of the forEach() method are kept the same way to not confuse developers (still can accept parameters 'value', 'key', 'map'). In this case, the 'key' is set to the same as 'value'

// So you can also do it like this below:
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// '_' as parameter means that it is a 'throwaway' value. Meaning that the parameter is unnecessary

// Array Data Transformation
// ============================
// the .map() method -> maps the values of the original array to a new array. Iterating over each original array's element and mutate them based on the given code before putting them into the new array.
// This method returns a new array

// the .filter() method -> returns a new array containing the array elements that passed a specific test condition.

// the .reduce() method -> reduces all array elements down to one single value (e.g. adding all elements together)

// map()
const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});

// OR

// const movementsUSD = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`,
);
console.log(movementsDescription);

//filter()
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// reduce()
const balance = movements.reduce(function (
  accumulator,
  currentElement,
  index,
  array,
) {
  return accumulator + currentElement;
}, 0);

// The '0' is the initial value of the accumulator
console.log(balance);

// Get Maximum value with reduce
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0],
);

console.log(max);

// We can combine the methods into 1

const totalDepositsUSD = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * euroToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

// find() -> like filter() but only return the first one
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

// findIndex();
console.log(movements.findIndex(mov => mov === 200));

// findLast() and findLastIndex()
console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000,
);

console.log(
  `Your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`,
);

// some() -> if there is an element fulfills the callback function, returns true
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// every() -> if all elements fulfills the callback function, returns true
console.log(movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// flat() -> makes multidemensional array of n dimensions into an array of n-1 dimensions by default.
const unflattenedArr = [[1, 2, 3], 4, 5, [6, 7, 8]]; //2D Array
console.log(unflattenedArr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8] //1D Array

// You can change how much the flat flattens the array by entering the parameter with the desired number.
const unflattenedArr2 = [[[1, 2, 3], 4, 5, 6], 7, 8]; //3D Array
console.log(unflattenedArr2.flat(2)); //1D Array as flat(2)

// flatMap() -> essentially combining the map() and flat() method, but can only flatten 1 level deep

// .sort() -> sorts array contents, but converts the contents to String first by default.

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(movements.sort());
//  return < 0 ? A, B
//  return > 0 ? B, A

// ASCENDING
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(movements);

// DESCENDING
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(movements);

// Numbers
// Numbers - ASCENDING
console.log(movements.sort((a, b) => a - b));
console.log(movements);

// NUMBERS - DESCENDING
console.log(movements.sort((a, b) => b - a));
console.log(movements);

// Another way to construct arrays
const x = new Array(7);
console.log(x);

// filling the arrays with fill(value, indexStart, indexEnd)
x.fill(1, 3, 5);
console.log(x);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

// ES2024 Methods
// ================================

// Array Grouping
console.log(movements);
const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals',
);
console.log(groupedMovements);

// Non-Destructive Alternatives: toReversed(), toSorted(), etc
// ===============================================================

// toReversed()
console.log(movements);
const reversedMov = movements.toReversed(); // same as slice().reverse()
console.log(movements);
console.log(reversedMov);

// The same goes for toSorted(sort), toSpliced(splice)

// with()
const newMovements = movements.with(1, 2000); //returns new array with values that are the same as the original except the one that is modified. In this case, the index 1's value is modified to 2000
console.log(newMovements);
console.log(movements);
