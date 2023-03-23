/* exported getValues */

/* PSEUDOCODE:

Define a function, named `getValues`, that accepts one argument `object`.
  Declare a variable named `values`, and assign it to an empty array.
  Begin a loop that iterates through the `object` object, where for each property in the `object`, assign it to a variable `key`, and:
    Add the value of the `object` object at index `key` to the `values` array.
  Return the `values` array.

*/

/* CODE IMPLEMENTATION:
*/

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
