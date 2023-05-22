import express from 'express';
import pg from 'pg';

const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);

    const grade = result.rows;
    res.json(grade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.use(express.json());
app.post('/api/grades', async (req, res) => {
  try {
    const { course, name, score } = req.body;
    switch (undefined) {
      case course: res.status(400).json({ error: 'course is a required field' });
        break;
      case name: res.status(400).json({ error: 'name is a required field' });
        break;
      case score: res.status(400).json({ error: 'score is a required field' });
        break;
    }

    const sql = `
      insert into "grades" ("course","name","score")
        values ($1, $2 ,$3)
    `;

    const result = await db.query(sql, [course, name, score]);
    const grade = result.rows[0];
    res.status(201).json(grade);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  const gradeId = Number(req.params.gradeId);

  try {
    const { course, name, score } = req.body;
    switch (undefined) {
      case gradeId: res.status(404).json({ error: 'invalid grade Id' });
        break;
      case course: res.status(400).json({ error: 'course is a required field' });
        break;
      case name: res.status(400).json({ error: 'name is a required field' });
        break;
      case score: res.status(400).json({ error: 'score is a required field' });
        break;
    }
    if (score < 0 || score > 100) {
      res.status(400).json({ error: '"score" must be between 0 and 100' });
    }

    const sql = `
    update "grades"
      set "course" = $1,
          "name" = $2,
          "score" = $3
    where "gradeId" = $4
    `;

    const result = await db.query(sql, [course, name, score, gradeId]);
    const grade = result.rows[0];
    res.status(200).json(grade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!gradeId) {
      res.status(404).json({ error: `cannot find gradeId ${gradeId} in the database` });
    }
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }

    const sql = `
    delete
      from "grades"
      where "gradeId" = $1
    `;

    const result = await db.query(sql, [gradeId]);
    const grade = result.rows[0];
    res.status(200).json(grade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

app.listen(3030, () => {
  console.log('Listening at port 3030...');
});
