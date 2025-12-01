const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");

let bucket;

function initGridFS() {
    const conn = mongoose.connection;

    conn.once("open", () => {
        bucket = new GridFSBucket(conn.db, {
            bucketName: "uploads"
        });
        console.log("📦 GridFS Bucket Ready");
    });
}

function getBucket() {
    if (!bucket) throw new Error("GridFS Bucket not initialized");
    return bucket;
}

module.exports = { initGridFS, getBucket };
