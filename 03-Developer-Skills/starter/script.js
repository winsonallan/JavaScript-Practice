// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(2000));

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // value: Number(prompt('Degrees celcius: ')),
    value: 10,
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// There are console.log(), console.warn(), console.eror(), console.table()

//CODING CHALLENGE 1
const printForecast = function (arr) {
  let forecastString = '';
  for (let i = 0; i < arr.length; i++) {
    forecastString += `...${arr[i]} °C in ${i + 1} days`;
  }
  forecastString += `...`;
  console.log(forecastString);
};
const forecastArr = [17, 21, 23];
printForecast(forecastArr);

const forecastArr2 = [12, 5, -5, 0, 4];
printForecast(forecastArr2);
