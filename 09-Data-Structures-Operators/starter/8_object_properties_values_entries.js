'use strict';
// Object Properties, Values & Entries
const properties = Object.keys(openingHours);
console.log(properties);
const values = Object.values(openingHours);

const entries = Object.entries(openingHours);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
