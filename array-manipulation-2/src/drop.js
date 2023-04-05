/* exported drop */
function drop(array, count) {
  const newArray = [];
  if (count >= array.length) {
    return [];
  } else {
    for (let i = count; i < array.length; i++) {
      newArray.push(array[i]);
    } return newArray;
  }
}
