// Converting Strings to Numbers
// =================================

console.log(Number('23'));
console.log(+'23');

// Parsing
// ===================================
console.log(Number.parseInt('30px'));
// for parsing to work, the string must start with a number
// it also has 2nd parameter, the base
// parseInt(String, base)
console.log(Number.parseInt('25rem', 10));
console.log(Number.parseInt('101', 2)); // 5 (binary 101 = decimal 5)

// there's also parseFloat()

// Checking
// ======================================
// isNaN() -> check if a value is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// isFinite() -> also checks if a value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

// isInteger() -> checks if a value is an integer
console.log(Number.isInteger(23));
console.log(Number.isInteger(20.0));
console.log(Number.isInteger(+'20X'));
console.log(Number.isInteger(23 / 0));

// 'Math' namespace
// ===============================
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(25 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

Math.trunc(23.4); //Removes decimals
Math.round(23.4); //Rounds to nearest integer
Math.floor(23.4); //Rounds down
Math.ceil(23.4); //Rounds up

Math.trunc('23.4'); //All of these 4 do type coercion by default
Math.round('23.4');
Math.floor('23.4');
Math.ceil('23.4');

//Rounding Decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

//Remainder Operator (%)
console.log(5 % 2);
console.log(5 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(3));
console.log(isEven(4));

// Numeric Separators -> just for easier coding

//287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

console.log(Number('230_000'));
console.log(parseInt('230_000'));

// BigInt
// ==============================

//Max Int value (No big int)
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
// using numbers bigger than the max_safe_integer can result in inconsistencies

// BigInts can go as high as we want
console.log(420941819235710294712857128561n); //The n specifies that it's bigInt
console.log(BigInt(498175918275012932759010293785));

// BigInt operations
// ----------------------
console.log(1000000n + 10957101935n);
console.log(518278350712938950789123057192n / 10000000000000000n);

// can't mix BigInts with integers/other types
let num = 10;
console.log(5182751902n / BigInt(num));

console.log(20n === 20);
console.log(20n == 20);

const huge = 18209357109273915702075919n;
// console.log(huge + ' is REALLY HUGE');

// can't do operations like Math.sqrt() on BigInts

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

// Dates
// ===========

// Create a Date
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:06:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 16, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); //Returns miliseconds of now from 1 Jan 1970

console.log(Date.now());
future.setFullYear(2040);
console.log(future);

// Date Operations
// ==================

console.log(+future);

const calcDaysPassed2 = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed2(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

// Internationalization of Dates
// =============================
// navigator.language; -> Get Locale
// new Intl.DateTimeFormat(locale).format(date);

const optionsLecDate = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  weekday: 'long',
};

// new Intl.DateTimeFormat(locale, optionsLecDate).format(date);

// Internationalization of Numbers
// ===============================
const optionsNum = {
  style: 'currency',
  unit: 'celcius',
  currency: 'EUR',
  useGrouping: false,
};
const num2 = 3884756.23;

console.log('US: ', new Intl.NumberFormat('en-US').format(num2));
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(num2));
console.log('Syria: ', new Intl.NumberFormat('ar-SY').format(num2));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num),
);

new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: currency,
}).format(value);

// Timers
// ===========
setTimeout(() => console.log('Here is your pizza!'), 3000);

console.log('Waiting');

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}!`),
  3000,
  ...ingredients,
);

if (ingredients.includes('pepperoni')) clearTimeout(pizzaTimer);

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

clearInterval(pizzaTimer);
