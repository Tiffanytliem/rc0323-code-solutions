/* exported reverse */
/*
PSEUDOCODE:

Define a function, named `reverse`, that accepts one argument `array`.
  Declare a variable named `reversedArray`, and assign it to an empty array.
  Begin a loop that iterates from the last item to the first item of the `array` array, where
    For each value of the array at index i, add it to the `reversedArray`.
  Return the value of the `reversedArray` variable.
*/

/* CODE IMPLEMENTATION:
*/

function reverse(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  } return reversedArray;
}
