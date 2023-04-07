const books = [{}, {}, {}];
books[0].isbn = '978-0804139298';
books[0].title = 'Zero to One';
books[0].author = 'Perter Thiel';
books[1].isbn = '978-1401959647';
books[1].title = 'The Mao Of Consciousness Explained';
books[1].author = 'David R. Hawkins';
books[2].isbn = '978-1627790369';
books[2].title = 'Algorithms to Live By: The Computer Science of Human Decisions';
books[2].author = 'Brian Christian and Tom Griffiths';

console.log('books:', books);
console.log('typeof books:', typeof books);

const convertToJSON = JSON.stringify(books);
console.log('convertToJSON:', convertToJSON);
console.log('typeof convertToJSON:', typeof convertToJSON);

const student = '{"numberID": 11, "name": "Tiffany"}';

console.log('student:', student);
console.log('typeof student:', typeof student);

const object = JSON.parse(student);

console.log('object: ', object);
console.log('typeof object: ', typeof object);
