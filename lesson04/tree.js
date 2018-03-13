console.log('Start tree');

const fs = require('fs');
var path = require('path')

fs.readdir('./node_modules/jquery', function (err, files) {
    if (err) return console.error(err);

    files.forEach(function(file) {
        //if (path.extname(file) === ext) {
          console.log(file);
        //}
    });
  });