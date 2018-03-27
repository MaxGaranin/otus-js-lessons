const fs = require('fs');

// default
// fs.readFile('passwd', {encoding: 'utf-8'}, (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// single
// fs.access('passwd', fs.constants.R_OK,
//     (err) => {
//         console.log(err ? 'no access!' : 'read')
//     })

var readFileFunc = promisify(fs.readFile);
readFileFunc('passwd', { encoding: 'utf-8' })
    .then(data => {
        console.log(data.toString());
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });

var accessFunc = promisify(fs.access);
accessFunc('passwd', fs.constants.W_OK)
    .then(_ => {
        console.log('read');
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });

function promisify(func) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            var callback = (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            };
           
            args.push(callback);
            func.apply(this, args);
        });
    }
}

