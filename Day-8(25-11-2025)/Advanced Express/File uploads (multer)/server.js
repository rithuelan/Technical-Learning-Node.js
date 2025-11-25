const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.static("public"));


// Storage config
const storage = multer.diskStorage({  //diskStorage → files will be saved to your system's disk (folder).
  destination: (req, file, cb) => {  //cb → Callback function
    cb(null, "uploads");  //null means no error
  },
  filename: (req, file, cb) => {  
    cb(null, Date.now() + path.extname(file.originalname));  //Date.now(), Generates a unique number (current timestamp).
  }
});

const upload = multer({ storage });   //create upload middleware

// NEW: home route so browser won’t show "Cannot GET /"
app.get("/", (req, res) => {
  res.send(`
    <h2>File Upload Server</h2>
    <p>Use Postman to upload an image.</p>
  `);
});

// Upload route
app.post("/upload", upload.single("image"), (req, res) => { //upload.single("image"),This is Multer middleware.,single("image") means:Accept only one file
  res.json({
    message: "File uploaded successfully!",
    file: req.file
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));