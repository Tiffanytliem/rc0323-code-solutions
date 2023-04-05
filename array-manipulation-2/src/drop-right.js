/* exported dropRight */
/* PSEUDOCODE

Define a function, named dropRight, that accepts two arguments: `array` and `count`.
  Declare a new variable named `newArray` and assign it to an empty array.
  Begin an if statement with the condition that if the length of `array` is less than `count`, then:
    Return an empty array
    If the condition was not met, then:
    Begin a loop that iterates through the `array` from index 0 to index: length of array minus count (excluded), that for each index in the array:
      Add the value to the end of the `newArray` array.
      Return the value of `newArray`.
*/

/* CODE IMPLEMENTATION
*/

function dropRight(array, count) {
  const newArray = [];
  if (array.length < count) {
    return [];
  } else {
    for (let i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    } return newArray;
  }
}
