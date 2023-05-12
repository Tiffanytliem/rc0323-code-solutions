import { writeFile } from 'node:fs/promises';
const note = process.argv[2];

try {
  await writeFile('note.txt', note + '\n');
} catch (err) {
  console.error('Error message:', err);
}
