const fsp = require('fs').promises;

async function save() {
  try {
    await fsp.writeFile('out.txt', 'Hello world\n', 'utf8');
    console.log('Saved');
  } catch (err) {
    console.error(err);
  }
}
save();
