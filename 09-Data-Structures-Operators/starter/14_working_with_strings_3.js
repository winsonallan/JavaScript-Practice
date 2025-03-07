'use strict';
// Split()
console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// Join()
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const word of names) {
    namesUpper.push(word[0].toUpperCase() + word.slice(1));

    // OR

    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');

// Padding padStart() and padEnd()
const message = 'Go to Gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padEnd(25, '+'));
console.log('Schmedtmann'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4039182957189264));
console.log(maskCreditCard('1927501827102983'));

// Repeat
const message2 = 'Bad weather.. All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈️`.repeat(n)}`);
};

planesInLine(3);
