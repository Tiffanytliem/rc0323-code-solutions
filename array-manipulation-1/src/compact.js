/* exported compact */
/*
PSEUDOCODE:
Define a function, named `compact`, that accepts one argument, `array`.
  Declare a variable named `compactArray`, and assign it to an empty array.
  Begin a loop that iterates through the `array` array, where
    For each index in the array:
    If the value is truthy, add the value of the array at that index to the `compactArray` array.
  Return the value of the `compactArray`
 */

/* CODE IMPLEMENTATION
*/

function compact(array) {
  const compactArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
  } return compactArray;
}
