import express from 'express';

const app = express();

let nextId = 1;

const grades = {

};

app.use('/', express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextId;
  grades[grade.id] = grade;
  res.json(grade);
  nextId++;
});

app.listen(9000, () => {
  console.log('Server is running...');
});
