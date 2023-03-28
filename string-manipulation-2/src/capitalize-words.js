/* exported capitalizeWords */
function capitalizeWords(string) {
  const array = string.toLowerCase().split('');
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || array[i - 1] === ' ') {
      array[i] = array[i].toUpperCase();
    }
  } return array.join('');
}
