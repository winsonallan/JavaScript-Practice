const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

// calling the 'set' method does not only update the Map, but also returns the map
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 22)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear()

rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); //Undefined

// To make that work we must do this
const arrRest = [1, 2];
rest.set(arrRest, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);

// Map Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try Again!'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Map is also iterable

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3;
// const answer = Number(prompt('Your answer'));

console.log(answer);

const correctAnswerMapLearn = question.get('correct');

if (correctAnswerMapLearn === Number(answer)) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

// ANOTHER METHOD

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);

// Other methods
console.log(question.entries());

console.log(...question.keys());
console.log(...question.values());
