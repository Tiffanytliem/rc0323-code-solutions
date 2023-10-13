/* exported student */
const student = {
  firstName: 'Tiffany',
  lastName: 'Liem',
  subject: 'physics',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction() {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }

};
