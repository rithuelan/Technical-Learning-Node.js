const { Duplex } = require("stream");

class NetworkTunnel extends Duplex {
  constructor() {
    super();
  }

  _write(chunk, encoding, callback) {
    console.log("Sending to remote server:", chunk.toString());

    // Simulate server response
    setTimeout(() => {
      this.push("Server response: " + chunk.toString());
    }, 500);

    callback();
  }

  _read() {}
}

const tunnel = new NetworkTunnel();

// Send data to remote server
tunnel.write("PING 1");
tunnel.write("PING 2");

tunnel.on("data", data => {
  console.log("Received from server:", data.toString());
});
