/* exported isAnagram */
/* PSEUDOCODE:
Define a function, named is Anagram, that accepts two arguments: `firstString` and `secondString`
  Declare a variable named `string1`, and assign it to the of `firstString` all lowercased with removed characters that are not alphabet letters or numbers.
  Declare a variable named `string2`, and assign it to the of `firstString` all lowercased with removed characters that are not alphabet letters or numbers, and
  Start an if statement with the condition that if the length of `string1` is strictly equal to the length of `string2`, then:
    Begin a loop that loop through the characters of `string2`, which for each character:
      If it is included in `string1`, then:
        Remove that character from `string1`.
        Else, return false.

      Return true.
    Else, return false.

*/
/* CODE IMPLEMENTATION:
*/
function isAnagram(firstString, secondString) {
  let string1 = firstString.toLowerCase().replace(/[^a-z0-9]/g, '');
  const string2 = secondString.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (string1.length === string2.length) {
    for (let i = 0; i < string2.length; i++) {
      if (string1.includes(string2.charAt(i))) {
        string1 = string1.replace(string2.charAt(i), '');
      } else {
        return false;
      }
    } return true;
  } else {
    return false;
  }
}
