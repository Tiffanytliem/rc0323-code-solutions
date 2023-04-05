/* exported reverseWords */

/* PSEUDOCODE:
Define a function, named reverseWords, that accepts one argument `string`.
  Declare a variable named `array`, and assign it to an array of words in the `string` variable, split by an empty space.
  Declare a variable named `reversed`, and assign it to an empty array.

  Begin a loop that iterates through the `array` array, where for each of the index in the array,
    Declare a variable named `reverseWord`, and assign it to an empty string.
    Begin a loop that iterates backwards through each character of the array at the current index, where for each character:
      Add it to the `reverseWord` variable;
    Add that word to the `reversed` array.

  Return the value of the `reversed` array converted to a string, with a space as a seperation for each word.
*/

/*  CODE IMPLEMENTATION:
*/

function reverseWords(string) {
  const array = string.split(' ');
  const reversed = [];

  for (let i = 0; i < array.length; i++) {
    let reverseWord = '';
    for (let j = array[i].length - 1; j >= 0; j--) {
      reverseWord += array[i].charAt(j);
    }reversed.push(reverseWord);
  } return reversed.join(' ');
}
