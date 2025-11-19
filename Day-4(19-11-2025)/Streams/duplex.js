const { Duplex } = require('stream');

const duplex = new Duplex({
  read(size) {
    this.push("Hello ");
    this.push(null);
  },
  write(chunk, encoding, callback) {
    console.log("Received:", chunk.toString());
    callback();
  }
});

duplex.write("Client message");
duplex.on('data', data => console.log("Sent:", data.toString()));
