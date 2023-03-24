/* exported numVowels */

/* PSEUDOCODE:
Define a function, named `numVowels`, that accepts one argument, `string`.
  Declare a variable named `count`, and assign it to 0.
  Declare a variable named `vowels`, and assign it to an array with 5 items: 'a', 'e', 'i', 'o', 'u'.
  Declare a variable named `j`, and assign it to 0.
  Begin a loop that iterates through the `string` string, where:
    For each index in the string:
      Begin a loop that iterates through the `vowels` array, where:
        For each index in the array:
        if the value of the string at index is strictly equal to the value of an index in the `vowels` array,
        increment `count` by 1;
      increment `j` by 1;
    return the value of the `count` variable.
*/

/* CODE IMPLEMENTATION
*/

function numVowels(string) {
  string = string.toLowerCase();
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let j = 0;
  while (j < string.length) {
    for (let i = 0; i < vowels.length; i++) {
      if (string.charAt(j) === vowels[i]) {
        count++;
      }
    } j++;
  }
  return count;
}
