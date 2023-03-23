/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  return (number % 2) === 0;
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  }
  return 'invalid pH level';
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'Yakko':
      return "We're the warner brothers!";
    case 'Wakko':
      return "We're the warner brothers!";
    case 'Dot':
      return 'I am cute~';
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Vagabond';
    case 'comedy':
      return 'Airplane!';
    case 'horror':
      return 'Train to Busan';
    case 'drama':
      return 'Itaewon Class';
    case 'musical':
      return 'La La Land';
    case 'sci-fi':
      return 'Everything everywhere all at once';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
