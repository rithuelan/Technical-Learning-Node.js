// util/promisifiedFs.js
const fs = require('fs');
const { promisify } = require('util');

exports.readFilePromise = promisify(fs.readFile);
exports.writeFilePromise = promisify(fs.writeFile);
exports.statPromise = promisify(fs.stat);

// Example wrapper demonstrating old callback -> new Promise
exports.readFileManual = function (path, encoding = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
