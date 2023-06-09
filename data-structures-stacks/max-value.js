import takeTop from './take-top';

export default function maxValue(stack) {
  let max = -Infinity;
  function findMax() {
    const value = takeTop(stack);
    if (typeof value === 'number' && value >= max) {
      max = value;
      findMax();
    } else if (typeof value === 'number' && value < max) {
      findMax();
    } else if (value === undefined) {
      return max;
    }
    return max;
  }
  return findMax();
}
