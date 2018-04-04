const fs = require('fs');
const path = require('path')

// Запускать так: npm run tree -- "./node_modules"
const inputDir = "d:\\work835\\Temp\\Резюме"; //process.argv[2];

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
    })
      .then(() => {
        var p2 = Promise.resolve();

        for (let i = 0; i < innerDirs.length; i++) {
          p2 = p2.then(() => {
            return readFilesEx(innerDirs[i]);
          });
        }

        return p2;
      })
      .then(() => {
        console.log('Resolved ' + dir);
      });

    // Это не работает, код вообще не выполняется
    // innerDirs.forEach(function (innerDir) {
    //   p = p.then(() => {
    //     return readFilesEx(innerDir);
    //   });
    // });


    // // Это работает (последовательная обработка подпапок)
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