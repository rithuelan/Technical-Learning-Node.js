const fsp = require('fs').promises;

async function readNotes() {
  try {
    const data = await fsp.readFile('notes.txt', 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Read failed:', err);
  }
}
readNotes();
