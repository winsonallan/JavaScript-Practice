// 1
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and it's capital city is ${capitalCity}`,
  );
}

describeCountry('Indonesia', 250, 'Jakarta');
describeCountry('USA', 350, 'Washington D.C.');
describeCountry('Singapore', 30, 'Singapore');

// 2
function percentageOfWorld1(population) {
  return (population * 100) / 7900;
}

let ppIndo = percentageOfWorld1(250),
  ppUSA = percentageOfWorld1(350),
  ppSingapore = percentageOfWorld1(30);

console.log(ppIndo, ppUSA, ppSingapore);

const percentageOfWorld2 = function (population) {
  return (population * 100) / 7900;
};

ppIndo = percentageOfWorld2(250);
ppUSA = percentageOfWorld2(350);
ppSingapore = percentageOfWorld2(30);

console.log(ppIndo, ppUSA, ppSingapore);

// 3
const percentageOfWorld3 = population => (population * 100) / 7900;

// 4
const describePopulation = function (country, population) {
  console.log(
    `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world!`,
  );
};

describePopulation('Indonesia', 250);
describePopulation('Singapore', 30);
describePopulation('USA', 350);

// 5
const populations = [250, 350, 30, 50];
console.log(populations.length == 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

//6
const neighbours = [
  'Malaysia',
  'Singapore',
  'Brunei',
  'Papua New Guinea',
  'East Timor',
  'Pihlippines',
  'Australia',
];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(
  !neighbours.includes('Germany')
    ? 'Probably not a central European country :D'
    : 'Probably a central European country :D',
);

neighbours[neighbours.indexOf('Brunei')] = 'Brunei Darussalam';

//7
const myCountry = {
  country: 'Indonesia',
  capital: 'Jakarta',
  language: 'Indonesian',
  population: 250,
  neighbours: [
    'Malaysia',
    'Singapore',
    'Brunei',
    'Papua New Guinea',
    'East Timor',
    'Pihlippines',
    'Australia',
  ],

  //9
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`,
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

// 8
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`,
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// 9 (Continued)
myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);

// 10
for (let voter = 1; voter <= 50; voter++)
  console.log(`Voter number ${voter} is currently voting`);

// 11
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);

//12
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

//13
const percentages3 = [];

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);
