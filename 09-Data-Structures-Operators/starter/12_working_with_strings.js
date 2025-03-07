'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); // Index Start
console.log(4, 7); //Index Start, End (The letter at the End index is not included)

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // If parameter is negative, it will start counting from the end

console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat :(');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// What JS does to make this work is to convert the string into an object. This is called 'boxing' as it puts the string into a 'box'

// just like if we do this below:
console.log(new String('Jonas'));

// Then after the processes like slice() is finished, the object is converted back into string
