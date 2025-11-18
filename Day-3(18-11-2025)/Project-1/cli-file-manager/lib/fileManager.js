const fs = require('fs');
const path = require('path');
const os = require('os');
const url = require('url');
const EventEmitter = require('events');

class FileManager extends EventEmitter {
  constructor() {
    super();
  }

  // Folder operations
  createFolder(folderName) {
    const folderPath = path.resolve(process.cwd(), folderName);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      this.emit('folderCreated', folderName);
    } else {
      console.log(`Folder "${folderName}" already exists.`);
    }
  }

  deleteFolder(folderName) {
    const folderPath = path.resolve(process.cwd(), folderName);
    if (fs.existsSync(folderPath)) {
      fs.rmdirSync(folderPath, { recursive: true });
      this.emit('folderDeleted', folderName);
    } else {
      console.log(`Folder "${folderName}" does not exist.`);
    }
  }

  // File operations
  createFile(fileName, content = '') {
    const filePath = path.resolve(process.cwd(), fileName);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content, 'utf8');
      this.emit('fileCreated', fileName);
    } else {
      console.log(`File "${fileName}" already exists.`);
    }
  }

  readFile(fileName) {
    const filePath = path.resolve(process.cwd(), fileName);
    if (fs.existsSync(filePath)) {
      console.log(fs.readFileSync(filePath, 'utf8'));
    } else {
      console.log(`File "${fileName}" not found.`);
    }
  }

  appendFile(fileName, content) {
    const filePath = path.resolve(process.cwd(), fileName);
    if (fs.existsSync(filePath)) {
      fs.appendFileSync(filePath, content);
      this.emit('fileAppended', fileName);
    } else {
      console.log(`File "${fileName}" not found.`);
    }
  }

  deleteFile(fileName) {
    const filePath = path.resolve(process.cwd(), fileName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      this.emit('fileDeleted', fileName);
    } else {
      console.log(`File "${fileName}" does not exist.`);
    }
  }

  // System info
  systemInfo() {
    console.log('OS:', os.type());
    console.log('Platform:', os.platform());
    console.log('CPU Cores:', os.cpus().length);
    console.log('Home Directory:', os.homedir());
    console.log('Current Directory:', process.cwd());
    console.log('Node.js Version:', process.version);
  }

  // URL utilities
  parseUrl(link) {
    const parsed = new url.URL(link);
    console.log('Protocol:', parsed.protocol);
    console.log('Host:', parsed.host);
    console.log('Pathname:', parsed.pathname);
    console.log('Search Params:', parsed.searchParams.toString());
  }
}

module.exports = FileManager;
