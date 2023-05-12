import takeAChance from './take-a-chance.js';

takeAChance('Tiffany').then(msg => {
  console.log(msg);
}).catch(error => console.log(error.message));
