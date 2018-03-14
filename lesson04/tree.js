const fs = require('fs');
const path = require('path')

// const inputDir = './node_modules';

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

  readFilesEx(dir, result);

  setTimeout(function () {
    callback(result);
  }, 1000);
}

function readFilesEx(dir, result) {
  fs.readdir(dir, function (err, files) {
    if (err) return console.error(err);

    files.forEach(function (file) {
      var fileName = path.join(dir, file);
      if (fs.lstatSync(fileName).isDirectory()) {
        result.folders.push(file);
        readFilesEx(fileName, result);
      }
      else {
        result.files.push(file);
      }
    });
  });
}

function printResult(result) {
  console.log(`\nFolders: ${result.folders.length}`);
  result.folders.forEach(function (file) {
    console.log(file);
  });

  console.log(`\nFiles: ${result.files.length}`);
  result.files.forEach(function (file) {
    console.log(file);
  });
}