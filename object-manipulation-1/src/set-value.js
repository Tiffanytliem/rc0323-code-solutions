/* exported setValue */
/* PSEUDOCODE:
  Define a function named `setValue`, that accepts three arguments: `object`, `key`, and `value`.
    Set the value of the `object` object at `key` equal to `value`.
*/

/* CODE IMPLEMENTATION:
*/

function setValue(object, key, value) {
  object[key] = value;
}
