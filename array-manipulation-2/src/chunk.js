/* exported chunk */
/* PSEUDOCODE
Define a function named `chunk`, that accepts two arguments: `array` and `size`.
  Declare a new variable named `newArray`, and assign it to an empty array.
  Start an if statement with a condition that if `size` is greater than the value of the length of `array`, then
    Return the value of `array`.
    Else, if the length of `array` is divisible by `size`, then:
    Set the length of `newArray` to the result of the length of `array` divide by `size`.
    Else, divide the length of `array` by `size`, ground the result down, add 1, and assign the final result to the length of `newArray`.

  Begin a loop that interates through the `newArray`, that for each index in the `newArray`:
    Assign it to an empty object.
    Begin a loop that iterate through `size`, where:
      If the result of the expression "index in `newArray` times  `size` plus the number of the iteration" is less than the length of `array`, then:
        Create a new property to the object `newArray` at index and assign it to the value of `array` at index (`newArray` current index times `size` plus the number of the interation)

      Get the values of each object inside the `newArray` and put them in an array.

    Return the value of `newArray`.

*/

/* CODE IMPLEMENTATION
*/

function chunk(array, size) {
  const newArray = [];
  if (size > array.length) {
    return array;
  } else if (array.length % size === 0) {
    newArray.length = array.length / size;
  } else {
    newArray.length = Math.floor(array.length / size) + 1;
  }

  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = {};
    for (let j = 0; j < size; j++) {
      if (i * size + j < array.length) {
        newArray[i][j] = array[i * size + j];
      }
    } newArray[i] = Object.values(newArray[i]);
  }
  return newArray;
}

/* function chunk(array, size) {
  const newArray = [];
  if (size > array.length) {
    return array;
  } else if (array.length % size === 0) {
    newArray.length = array.length / size;
    for (let i = 0; i < newArray.length; i++) {
      newArray[i] = [];
      for (let j = 0; j < size; j++) {
        newArray[i].push(array[i * size + j]);
      }
    }
  } else {
    newArray.length = Math.floor(array.length / size) + 1;

    for (let i = 0; i < newArray.length - 1; i++) {
      newArray[i] = [];
      for (let j = 0; j < size; j++) {
        newArray[i].push(array[i * size + j]);
      }
    }
    const remaining = [];
    const index = (newArray.length - 1) * size;
    for (let i = index; i < array.length; i++) {
      remaining.push(array[i]);
    }
    newArray[newArray.length - 1] = remaining;
  }
  return newArray;
}
*/
