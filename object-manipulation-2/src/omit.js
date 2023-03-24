/* exported omit */
/* function omit(source, keys) {
  for (const prop in source) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === prop) {
        delete source[prop];
      }
    }
  }
  return source;
}
*/

function omit(source, keys) {
  const object = {};
  for (const prop in source) {
    if (!keys.includes(prop)) {
      object[prop] = source[prop];
    }
  }
  return object;
}
