const { getBucket } = require("../utils/gridfs");

exports.uploadFile = async (req, res) => {
    try {
        const bucket = getBucket();

        const uploadStream = bucket.openUploadStream(req.file.originalname, {
            contentType: req.file.mimetype
        });

        uploadStream.end(req.file.buffer);

        uploadStream.on("finish", (file) => {
            res.status(201).json({
                message: "File uploaded successfully",
                fileId: file._id,
                filename: file.filename
            });
        });

        uploadStream.on("error", (err) => {
            console.log(err);
            res.status(500).json({ error: "Upload failed" });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getFiles = async (req, res) => {
    const bucket = getBucket();
    const files = await bucket.find().toArray();
    res.json(files);
};

exports.downloadFile = async (req, res) => {
    try {
        const bucket = getBucket();
        const id = new mongoose.Types.ObjectId(req.params.id);
        bucket.openDownloadStream(id).pipe(res);
    } catch (err) {
        res.status(404).json({ error: "File not found" });
    }
};
