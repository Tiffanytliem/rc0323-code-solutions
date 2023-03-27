/* exported getKeys */
/* PSEUDOCODE:

Define a function named `getKeys`, that accepts one argument `object`.
  Declare a variable named keys, and assign it to an empty array.
  Begin a loop that iterates through the `object`, where
    For each property in `object`, assign it to the variable `key`, and:
      Add the value of the `key` variable to the `keys` array.
    Return the `keys` array.
*/

/* CODE IMPLEMENTATION:
*/

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
