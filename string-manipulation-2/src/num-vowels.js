/* exported numVowels */
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
