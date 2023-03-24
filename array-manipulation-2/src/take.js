/* exported take */
function take(array, count) {
  const newArray = [];
  if (array.length <= count) {
    return array;
  } else {
    for (let i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}
