const express = require("express");
const app = express();


// ----------------------------------------
// 1) express.json() – Parse JSON request body
// ----------------------------------------
app.use(express.json());

app.post("/user", (req, res) => {
    const userData = req.body;  // Now JSON body is readable
    res.send({
        message: "User data received",
        data: userData
    });
});


// ----------------------------------------
// 2) express.static() – Serve static files
// ----------------------------------------
// Serves all files inside the "public" folder
app.use("/public", express.static("public"));

/*
If your folder structure is:

project/
 ├── server.js
 └── public/
      ├── index.html
      ├── style.css
      └── logo.png

Then you can access:
http://localhost:3000/public/index.html
http://localhost:3000/public/style.css
http://localhost:3000/public/logo.png
*/


// ----------------------------------------
// Simple Home Route
// ----------------------------------------
app.get("/", (req, res) => {
    res.send("Built-in Middleware Demo Running...");
});


// ----------------------------------------
// Start Server
// ----------------------------------------
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
