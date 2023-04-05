/* exported titleCase */
function titleCase(string) {

  const array = string.toLowerCase().split(' ');
  const minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'in', 'of', 'on', 'per', 'to', 'for'];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'api') {
      array[i] = 'API';
    } else if (array[i].includes('javascript')) {
      array[i] = array[i].replace('j', 'J');
      array[i] = array[i].replace('s', 'S');
    } else if (!minor.includes(array[i])) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
      if (array[i].includes('-')) {
        const x = array[i].indexOf('-');
        array[i] = array[i].replace(array[i].charAt(x + 1), array[i].charAt(x + 1).toUpperCase());
      }
    } else {
      if (i === 0 || array[i - 1].charAt(array[i - 1].length - 1) === ':') {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
      }
    }
  } return array.join(' ');
}
