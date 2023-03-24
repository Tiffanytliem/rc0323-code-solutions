/* exported defaults */

/* PSEUDOCODE:

Define a function, named `defaults`, that accepts two arguments `target` and `source`.
  Declare a variable named `keys`, and assign it to an array of keys in the `target` object.
  Begin a loop that iterates through the properties in the `source` object that:
    For each property, if the property does not include in the `keys` array, then:
      Assign the value of `prop` to the `target` object as its property and assign that property a value of the `source` object at property `prop`.
*/

/*  CODE IMPLEMENTATION
*/

function defaults(target, source) {
  const keys = Object.keys(target);
  for (const prop in source) {
    if (!keys.includes(prop)) {
      target[prop] = source[prop];
    }
  }
}
