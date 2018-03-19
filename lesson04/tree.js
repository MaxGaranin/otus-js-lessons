const fs = require('fs');
const path = require('path')

// Запускать так: npm run tree -- "./node_modules"
const inputDir = process.argv[2];
if (!fs.lstatSync(inputDir).isDirectory()) {
  console.error("Argument must be a folder path!");
  return;
}

readFiles(inputDir, printResult);

function readFiles(dir, callback) {
  var result = {
    files: [],
    folders: []
  };

  var chain = Promise.resolve();

  chain
    .then(() => readFilesEx(dir))
    .then(() => callback(result));

  function readFilesEx(dir) {
    return new Promise((resolve, reject) => {
      fs.readdir(dir, function (err, files) {
        if (err) reject(err);
        console.log('Dir: ' + dir);

        files.forEach(function (file) {
          var fileName = path.join(dir, file);
          if (fs.lstatSync(fileName).isDirectory()) {
            result.folders.push(file);
            chain
              .then(() => readFilesEx(fileName))
              .then(() => {
                console.log('Resolved ' + dir);
                resolve();
              });
          }
          else {
            result.files.push(file);
            console.log('File: ' + file);
          }
        });
      });
    });
  }
}

function printResult(result) {
  console.log('Print result');

  console.log(`\nFolders: ${result.folders.length}`);
  result.folders.forEach(function (file) {
    console.log(file);
  });

  console.log(`\nFiles: ${result.files.length}`);
  result.files.forEach(function (file) {
    console.log(file);
  });
}