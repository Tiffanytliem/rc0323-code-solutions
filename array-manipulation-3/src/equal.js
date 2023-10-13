/* exported equal */
/* PSEUDOCODE:
Define a function, named `equal`, that accepts two arguments `first` and `second`.
  Start an if statement that if the length of `first` is not strictly equal to the length of `second`, then:
    Return false
    Else,
      Begin a loop that iterates through each index in `first`, that for each index:
        Start a if statement that if the value of `first` is not strictly equal to the value of `second` at the same index, then:
          Return false.
    Return true.
*/

/* CODE IMPLEMENTATION:
*/
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  } return true;
}
