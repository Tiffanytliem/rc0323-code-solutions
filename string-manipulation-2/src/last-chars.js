/* exported lastChars */
/* PSEUDOCODE:
Define a function named lastChars, that accepts two arguments `length` and `string`.
  Declare a new variable named `array`, and assign it to an empty array.
  If the value of `length` is greater than or equal to the length of `string`, then:
    Return the value of `string` variable.
    Else, begin a loop that iterates through the `string` string, initialize at index length of string minus `length`, where:
      For each index in the string, add the character at the index to the `array` array.
    Convert the `array` array to string and return the value of that string.
*/
/* CODE IMPLEMENTATION
*/
function lastChars(length, string) {
  const array = [];
  if (length >= string.length) {
    return string;
  } else {
    for (let i = string.length - length; i < string.length; i++) {
      array.push(string.charAt(i));
    }
  } return array.join('');
}
