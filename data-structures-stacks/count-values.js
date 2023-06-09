import takeTop from './take-top';
import isEmpty from './is-empty';

export default function countValues(stack) {
  let count = 0;
  function addCount() {
    if (isEmpty(stack)) {
      return count;
    } else {
      takeTop(stack);
      count++;
      addCount();
    } return count;
  }
  return addCount();
}
