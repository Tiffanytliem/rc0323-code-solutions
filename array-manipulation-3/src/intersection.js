/* exported intersection */

/* PSEUDOCODE:
Define a function, named `intersection`, that accepts two arguments `first` and `second`.
  Declare a new variable, named `array`, and assign it to an empty array.
  Begin a loop that iterates through each index of the first array, where for each index:
    If the value of the index is also in the second array, then:
      Add the value of the `first` array at that index to the end of the `array` array.
    Return the value of the `array` array.

*/
/* CODE IMPLEMENTATION:
 */
function intersection(first, second) {
  const array = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      array.push(first[i]);
    }
  } return array;
}
