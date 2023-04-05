/* exported includes */
/* PSEUDOCODE:
Define a function named `includes`, that accepts two arguments `array` and `value`.
  Begin a loop that iterates through the `array`, which for each index of the array:
    If the value of the `array` at that index is strictly equaly to `value`, then":
      Return true.

   If no value is returned after the loop exits, then return false.
*/
/* CODE IMPLEMENTATION
*/

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}
