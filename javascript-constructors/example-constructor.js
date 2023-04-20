function ExampleConstructor() {
  console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
  console.log('typeof ExmapleConstructor.prototype:', typeof ExampleConstructor.prototype);
}

const aConstructor = new ExampleConstructor();
console.log(aConstructor);

const instanceOfExampleConstructor = aConstructor instanceof ExampleConstructor;
console.log('instanceOfExampleConstructor: ', instanceOfExampleConstructor);
