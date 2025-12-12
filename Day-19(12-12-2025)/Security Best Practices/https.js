import https from "https";
import fs from "fs";

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};

https.createServer(options, app).listen(443, () => {
  console.log("HTTPS server running on port 443");
});
