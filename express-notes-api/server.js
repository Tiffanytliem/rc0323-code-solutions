import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

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

app.use(express.json());

app.post('/api/notes', async (req, res) => {
  try {
    const { content } = req.body;
    if (content === undefined) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    const data = await getData();
    const note = {
      id: data.nextId,
      content
    };
    data.notes[note.id] = note;
    data.nextId++;
    await writeFile('./data.json', JSON.stringify(data, null, 2));
    res.status(201).json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await getData();
    const id = Number(req.params.id);

    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
    }

    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }

    delete data.notes[id];

    await writeFile('./data.json', JSON.stringify(data, null, 2));
    res.sendStatus(204);

  } catch (error) {
    console.log(error);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = await getData();
    const id = Number(req.params.id);
    const { content } = req.body;
    if ((Number.isNaN(id) || !Number.isInteger(id) || id < 1) || (content === undefined)) {
      res.status(400).json({ error: 'id must be a positive integer' });
    }

    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }
    data.notes[id].content = content;
    await writeFile('./data.json', JSON.stringify(data, null, 2));
    res.status(201).json(data.notes[id]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(3000, () => {
  console.log('Listening at port 3000');
});
