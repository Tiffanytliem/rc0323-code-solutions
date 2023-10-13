import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const x = Number(process.argv[2]);
const operator = process.argv[3];
const y = Number(process.argv[4]);

switch (operator) {
  case 'plus':
    console.log('result', add(x, y));
    break;
  case 'minus':
    console.log('result', subtract(x, y));
    break;
  case 'times':
    console.log('result', multiply(x, y));
    break;
  case 'over':
    console.log('result', divide(x, y));
    break;
}
