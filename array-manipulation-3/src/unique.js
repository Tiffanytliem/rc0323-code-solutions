/* exported unique */

/* PSEUDOCODE:
Define a function, named `unique`, that accepts one argument `array`.
  Declare a new variable named `unique`, and assign it to an empty array.
  Begin a loop that iterates through each index of the `array` array, where for each index:
    If the value is not contained in the `unique` array:
      Push the value to the end of the `unique` array.
    Return the value of the `unique` array.
*/

/* CODE IMPLEMENTATION:
 */
function unique(array) {
  const unique = [];
  for (let i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  } return unique;
}
