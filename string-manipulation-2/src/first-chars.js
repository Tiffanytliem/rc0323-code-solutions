/* exported firstChars */
/*

PSEUDOCODE:
Define a function, named `firstChars`, that accepts two arguments: `length` and `string`.
If the `length` variable is greater than or equal to the length of `string` variable, then:
  Return the value of `string` value.
  Else if the `length` variable is smaller than the length of `string` variable, then:
  Set the length of `array` variable equal to the `length` variable.
  Return the value of the joined array without any seperating character.
*/
/* CODE IMPLEMENTATION:
*/

function firstChars(length, string) {
  const array = string.split('');
  if (length >= string.length) {
    return string;
  } else if (length < string.length) {
    array.length = length;
  }
  return array.join('');
}
