'use strict';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightsArr = [...flights.split('+')];
// console.log(flights);
// console.log(flightsArr);

for (const flight of flightsArr) {
  const flightDetail = [...flight.split(';')];
  //   console.log(flightDetail);

  let i = 0;
  for (const detail of flightDetail) {
    // console.log(detail);
    if (detail.includes(':') || detail.includes('_')) {
      flightDetail[i] = detail.replaceAll('_', ' ').replaceAll(':', 'h').trim();
    } else {
      flightDetail[i] = detail.trim().slice(0, 3).toUpperCase();
    }

    if (detail.includes('Delayed')) {
      flightDetail[i] = '🔴 ' + flightDetail[i];
    }
    i++;
  }

  //   console.log(flightDetail);
  console.log(
    `${flightDetail[0].padStart(20)} from ${flightDetail[1]} to ${flightDetail[2]} (${flightDetail[3]})`,
  );
}
