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

app.listen(3030, () => {
  console.log('Listening at port 3030...');
});
