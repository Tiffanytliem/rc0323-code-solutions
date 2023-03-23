/* exported toObject */
/* PSEUDOCODE:
Define a function named toObject, that accepts one argument: `keyValuePair`.
  Declare a new variable named `object`, and assign it to an empty object.
  Set `object` object's property equal to the value of `keyValuePair` array at index 0 and assign the property to the value of `keyValuePair` array at index 1.

*/
/* CODE IMPLEMENTATION:
*/

function toObject(keyValuePair) {
  const object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
