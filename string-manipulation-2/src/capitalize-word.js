/* exported capitalizeWord */
/*
PSEUDOCODE:

Define a function, named `capitalizeWord`, that accepts one argument, `word`.
  Start an if-else statement that if the all-lower-case version of `word` is strictly equal to the word `javascript`,
    then return the word `Javascript`.
  If the condition was not met, then:
  `word` is updated to all lowercased and reassigned to `word` variable.
  `word` is then reassigned the value of the expression: the uppercased first character of `word` concatenated with the remaining characters of `word` starts at index 1.
  Return the value of `word` variable;
*/
/* CODE IMPLEMENTATION:
*/

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  word = word.toLowerCase();
  word = word.charAt(0).toUpperCase() + word.slice(1, word.length);
  return word;
}
