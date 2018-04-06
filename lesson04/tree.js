const fs = require('fs');
const path = require('path')

// Запускать так: npm run tree -- "./node_modules"
const inputDir = process.argv[2];

if (!fs.lstatSync(inputDir).isDirectory()) {
  console.error("Argument must be a folder path!");
  return;
}

readFiles(inputDir)
  .then((res) => printResult(res));

function readFiles(dir) {
  return new Promise((resolve, reject) => {
    let result = {
      files: [],
      folders: []
    };

    readFilesRecursive(dir, result)
      .then(() => resolve(result));
  });

  function readFilesRecursive(dir, result) {
    let p = new Promise((resolve, reject) => {
      fs.readdir(dir, function (err, files) {
        if (err) {
          reject(err);
          return;
        }

        var innerDirs = [];

        files.forEach(function (file) {
          var fileName = path.join(dir, file);
          if (fs.lstatSync(fileName).isDirectory()) {
            result.folders.push(file);
            innerDirs.push(fileName);
          }
          else {
            result.files.push(file);
          }
        });

        resolve(innerDirs);
      });
    })
      .then((innerDirs) => {
        let innerPromise = Promise.resolve();

        innerDirs.forEach(function (innerDir) {
          innerPromise = innerPromise.then(() => {
            return readFilesRecursive(innerDir, result);
          });
        });

        return innerPromise;
      });

    return p;
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