import { readFile, writeFile } from 'node:fs/promises';

const [,, command, ...args] = process.argv;

async function readNote() {
  try {
    const jsonData = await readFile('./data.json', 'utf8');
    const data = JSON.parse(jsonData);
    const notes = data.notes;
    for (const note in notes) {
      console.log(`${note}: ${notes[note]}`);
    }
  } catch (err) {
    console.error(err);
  }
}

async function createNote() {
  const JSONdata = await readFile('./data.json', 'utf8');
  const data = JSON.parse(JSONdata);
  data.notes[data.nextId] = args[0];
  data.nextId++;
  try {
    await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(err);
  }
}

async function updateNote() {
  const JSONdata = await readFile('./data.json', 'utf8');
  const data = JSON.parse(JSONdata);
  data.notes[args[0]] = args[1];
  try {
    await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(err);
  }
}

async function deleteNote() {
  const JSONdata = await readFile('./data.json', 'utf8');
  const data = JSON.parse(JSONdata);
  delete data.notes[args[0]];
  try {
    await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(err);
  }
}

switch (command) {
  case 'read': readNote();
    break;
  case 'create': createNote();
    break;
  case 'update': updateNote();
    break;
  case 'delete': deleteNote();
    break;
}
