/* exported getIndexes */
function getIndexes(array) {
  const newArray = [];
  for (const key in array) {
    newArray.push((Number(key)));
  }
  return newArray;
}
