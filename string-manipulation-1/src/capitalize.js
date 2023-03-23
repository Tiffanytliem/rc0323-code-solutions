/* exported capitalize */
function capitalize(word) {
  const array = word.toLowerCase().split('');
  array[0] = array[0].toUpperCase();
  return array.join('');
}
