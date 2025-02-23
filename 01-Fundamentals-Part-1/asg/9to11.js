// 9

let sarahLanguage = 'English',
  sarahIsIsland = 'false',
  sarahPopulation = 50000000;

const country = 'Indonesia',
  continent = 'Asia',
  population = 250000000,
  isIsland = true,
  language = Indonesian;

if (
  sarahPopulation < population &&
  sarahIsIsland == isIsland &&
  sarahLanguage == language
) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// 10
switch (language) {
  case 'Chinese':
  case 'Mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log(`3rd place`);
    break;
  case 'Hindi':
    console.log(`4th place`);
    break;
  case 'Arabic':
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
}

// 11
population > 33000000
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);
