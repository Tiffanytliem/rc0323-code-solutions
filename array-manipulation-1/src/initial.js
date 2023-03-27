/* exported initial */
/*
PSEUDOCODE:

Define a function, named `initial`, that accepts one argument, `array`.
Declare a variable named `initialArray`, and assign it to an empty array.
Begin a loop that iterates through the `array` array until the second to last index, where
  For each index in the array:
  Push the value of the array at the index to the `initialArray` array.
Return the value of the `initialArray` variable.

*/

/* CODE IMPLEMENTATION:
*/

function initial(array) {
  const initialArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}
