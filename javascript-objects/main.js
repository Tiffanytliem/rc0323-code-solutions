const student = {
  firstName: 'Tiffany',
  lastName: 'Liem',
  age: 28
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Ecom Specialist';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'Tesla',
  model: 'Y',
  year: 2023
};

vehicle['color'] = 'dark green';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:)", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: '',
  type: ''
};
delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
