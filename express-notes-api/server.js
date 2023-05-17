import express from 'express';
import { readFile } from 'node:fs/promises';

const app = express();

async function getData() {
  const jsonData = await readFile('./data.json');
  return JSON.parse(jsonData);
}

app.get('/api/notes', async (req, res) => {
  try {
    const data = await getData();
    console.log(data);
    const notesArray = [];
    for (const note in data.notes) {
      notesArray.push(data.notes[note]);
    }
    res.json(notesArray);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unexpected error' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await getData();
    const id = Number(req.params.id);
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
    }

    if (!(data.notes[id])) {
      res.status(404).json({ error: 'Cannot find note with id of ' + id });
    }

    res.json(data.notes[id]);

  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log('Listening at port 3000');
});
