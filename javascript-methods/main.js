const num1 = 2;
const num2 = 11;
const num3 = 38;

const maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue:', maximumValue);

const heroes = ['Ant Man', 'Daredevil', 'Doctor Strange', 'Baymax'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'The Power of Now',
    author: 'Eckhart Tolle'
  },
  {
    title: 'The Hitch-Hiker\'s Guide to the Galaxy',
    author: 'Douglas Adams'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear'
  }
];

const lastBook = library.pop();
console.log('lastBook', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Tiffany Liem';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
