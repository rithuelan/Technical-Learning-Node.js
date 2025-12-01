const router = require('express').Router();
const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
const path = require('path');
const fileCtrl = require('../controllers/file.controller');
const mongoose = require('mongoose');

// storage
const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return {
      filename: Date.now() + '-' + file.originalname,
      bucketName: 'uploads'
    };
  }
});
const upload = multer({ storage });

// POST /api/files/upload
router.post('/upload', upload.single('file'), (req, res) => {
  res.status(201).json({ success:true, file: req.file });
});

// GET list
router.get('/', fileCtrl.listFiles);

// GET download by filename
router.get('/download/:filename', fileCtrl.downloadFile);

// DELETE by file id
router.delete('/:id', fileCtrl.deleteFile);

module.exports = router;
