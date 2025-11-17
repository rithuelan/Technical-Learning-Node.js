const fs = require('fs');

try {
  const data = fs.readFileSync('notes.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Sync read error', err);
}
