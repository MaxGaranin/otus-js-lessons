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
        if (err) {
          reject(err);
          return;
        }

        console.log('Dir: ' + dir);
        var innerDirs = [];

        files.forEach(function (file) {
          var fileName = path.join(dir, file);
          if (fs.lstatSync(fileName).isDirectory()) {
            result.folders.push(file);
            innerDirs.push(fileName);
          }
          else {
            result.files.push(file);
            console.log('File: ' + file);
          }
        });

        innerDirs.forEach(function (innerDir) {
          chain.then(readFilesEx(innerDir));
        });

        chain
          .then(() => {
            console.log('Resolved ' + dir);
            resolve();
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