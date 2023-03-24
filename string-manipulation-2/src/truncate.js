/* exported truncate */
function truncate(length, string) {
  let truncate = '';
  if (string.length >= length) {
    for (let i = 0; i < length; i++) {
      truncate += string[i];
    }
  } else {
    truncate += string;
  }
  return (truncate += '...');
}
