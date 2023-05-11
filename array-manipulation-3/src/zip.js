/* exported zip */
function zip(first, second) {
  const array = [];
  let length = 0;
  if (first.length > second.length) {
    length = second.length;
  } else {
    length = first.length;
  }
  for (let i = 0; i < length; i++) {
    const smallArray = [];
    smallArray.length = 2;
    smallArray[0] = first[i];
    smallArray[1] = second[i];
    array.push(smallArray);
  }
  return array;
}
