import { writeFile, readFile } from 'node:fs/promises';

let contentToCopy;
try {
  contentToCopy = await readFile(process.argv[2], 'utf8');
} catch (err) {
  console.error(err);
  process.exit(1);
}

const newFile = process.argv[3];
try {
  await writeFile(newFile, contentToCopy);
} catch (err) {
  console.error(err);
}
