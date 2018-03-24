const fs = require('fs');
const path = require('path')

// Запускать так: npm run tree -- "./node_modules"
const inputDir = process.argv[2];

if (!fs.lstatSync(inputDir).isDirectory()) {
  console.error("Argument must be a folder path!");
  return;
}

readFiles(inputDir);

function readFiles(dir) {
  var result = {
    files: [],
    folders: []
  };

  Promise.resolve()
    .then(() => readFilesEx(dir))
    .then(() => printResult(result));

  function readFilesEx(dir) {
    var innerDirs = [];

    var p = new Promise((resolve, reject) => {
      fs.readdir(dir, function (err, files) {
        if (err) {
          reject(err);
          return;
        }

        console.log('Dir: ' + dir);

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

        resolve(result);
      });
    });

    // Это не работает, код вообще не выполняется
    innerDirs.forEach(function (innerDir) {
      p = p.then(() => {
        return readFilesEx(innerDir);
      });
    });

    // Это работает (последовательная обработка подпапок)
    // p = p.then(() => {
    //   if (innerDirs.length > 0) {
    //     return readFilesEx(innerDirs[0]);
    //   }
    // });

    // p = p.then(() => {
    //   if (innerDirs.length > 1) {
    //     return readFilesEx(innerDirs[1]);
    //   }
    // });

    p = p.then(() => {
      console.log('Resolved ' + dir);
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