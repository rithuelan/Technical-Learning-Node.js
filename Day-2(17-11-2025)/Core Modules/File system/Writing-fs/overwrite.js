const fs = require('fs');

fs.writeFile('out.txt', 'Hello world\n', (err) => {
  if (err) {
    console.error('Write failed:', err);
    return;
  }
  console.log('Write complete');
});
