// 1.
const country = 'Indonesia',
  continent = 'Asia',
  population = 250000000;

console.log(country, continent, population);

// 2.
const isIsland = true;
let language;
console.log(country, continent, population, isIsland, language);

// 3.
language = 'Indonesian';

// 4.
console.log(population / 2);

console.log(population + 1);

const isMoreThanFinland =
  population > 6000000
    ? console.log('My country has more people than Finland')
    : 'Finland has more people than my country';

const isMoreThanAverage =
  population > 33000000
    ? console.log('My country has more people than the average country')
    : 'The average country has more people than mine';

// 4 & 5
console.log(
  `${country} is in ${continent}, and its ${population / 1000000} people speak ${language}`,
);

// 6
if (population > 33000000) {
  console.log(
    `${country}'s population is ${population - 33000000} above average`,
  );
} else {
  console.log(
    `${country}'s population is ${33000000 - population}below average`,
  );
}

// 7
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> `617`
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// 8
let numNeighbors = prompt(
  'How many neighbour countries does your contry have?',
);

if (numNeighbors == 1) {
  console.log('Only 1 border!');
} else if (numNeighbors > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}

if (numNeighbors === 1) {
  console.log('Only 1 border!');
} else if (numNeighbors > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}

numNeighbors = Number(numNeighbors);

if (numNeighbors == 1) {
  console.log('Only 1 border!');
} else if (numNeighbors > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}

if (numNeighbors === 1) {
  console.log('Only 1 border!');
} else if (numNeighbors > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}
