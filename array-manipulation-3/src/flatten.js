/* exported flatten */
/* PSEUDOCODE:
Define a function, named `flatten`, that accepts one argument `array`.
  Declare a variable named `flatArray`, and assign it to an empty array.
  Begin a loop that iterates through each index of the `array` array, where for each index:
    If the value is an array, then"
      Begin a loop that iterates through each index of that array, where for each index:
        Push the value of the index to the `flatArray` array.
      Else, push the value of the index to the `flatArray` array.
  Return the value of `flatArray`;
*/

/* CODE IMPLEMENTATION:
*/

function flatten(array) {
  const flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    } else {
      flatArray.push(array[i]);
    }
  } return flatArray;
}
