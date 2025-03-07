'use strict';

// To Lower/Upper Case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization
const passenger = 'jONaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Trim -> Removes spaces or line terminators that are leading or trailing
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// There's also trimStart() and trimEnd() if you want to do the same operation but only on the leading or trailing spaces respectively.

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));

// replace() replaces only the first instanceof. If you want to replace all, use replaceAll()

// If not, you can use regular expressions, like below
console.log(announcement.replace(/door/g, 'gate'));

// instead of quotes '', we use /. The 'g' indicates that we want to replace it globally

// Boolean returning methods
const plane2 = 'A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.startsWith('A'));
console.log(plane2.endsWith('8'));

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
