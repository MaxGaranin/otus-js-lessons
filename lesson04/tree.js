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
  let result = {
    files: [],
    folders: []
  };

  return new Promise((resolve, reject) => {
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
        // console.log('Dir: ' + dir);

        var innerDirs = [];

        files.forEach(function (file) {
          var fileName = path.join(dir, file);
          if (fs.lstatSync(fileName).isDirectory()) {
            result.folders.push(file);
            innerDirs.push(fileName);
          }
          else {
            result.files.push(file);
            // console.log('File: ' + file);
          }
        });

        resolve(innerDirs);
      });
    })
      .then((innerDirs) => {
        let p2 = Promise.resolve();

        innerDirs.forEach(function (innerDir) {
          p2 = p2.then(() => {
            return readFilesRecursive(innerDir, result);
          });
        });

        return p2;
      })
      .then(() => {
        // console.log('Resolved ' + dir);
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