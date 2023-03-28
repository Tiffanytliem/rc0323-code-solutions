/* exported swapChars */

/* PSEUDOCODE
Define a function named `swapChars`, that accepts three arguments `firstIndex`, `secondIndex`, `string`.
  Convert the string to an array and assign that array to a new variable `array`.
  Declare a new variable named `value`, and assign it to the value of `array` at `firstIndex`.
  Reassign the value of the `array` at `firstIndex` to the value of the `array` at `secondIndex`.
  Reassign the value of the `array` at the `secondIndex` to the value of `value`.
  Convert the array to string and return the value of that string.

*/
/* CODE IMPLEMENTATION
*/
function swapChars(firstIndex, secondIndex, string) {
  const array = string.split('');
  const value = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = value;
  return array.join('');
}
