/* exported pick */
function pick(source, keys) {
  const object = {};
  for (let i = 0; i < keys.length; i++) {
    for (const prop in source) {
      if (source[prop] !== undefined && keys[i] === prop) {
        object[prop] = source[prop];
      }
    }
  } return object;
}
