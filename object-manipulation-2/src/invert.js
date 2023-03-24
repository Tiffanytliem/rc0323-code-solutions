/* exported invert */
/* PSEUDOCODE:
Define a function, named `invert`, that accepts one argument `source`.
  Declare a variable named `invert`, and assign it to an empty object.
  Begin a loop that iterates through the properties of the `source` object, declare a variable named `prop` and assign it to the property of the `source` object in each iteration, where:
    Assign the name of the `invert` object's property to the value of the `source` object at property `prop`, and assign the value of the `invert`object at that property to `prop`.
    Return the `invert` object.

*/
function invert(source) {
  const invert = {};
  for (const prop in source) {
    invert[source[prop]] = prop;
  } return invert;
}
