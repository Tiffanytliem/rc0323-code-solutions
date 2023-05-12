import { writeFile } from 'node:fs/promises';

try {
  await writeFile('random.txt', Math.random().toString());
} catch (err) {
  console.error('Error message: ', err);
}
