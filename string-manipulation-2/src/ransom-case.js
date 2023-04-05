/* exported ransomCase */
function ransomCase(string) {
  string = string.toUpperCase();
  const array = string.split('');
  for (let i = 0; i < string.length; i += 2) {
    array[i] = array[i].toLowerCase();
  } return array.join('');
}
