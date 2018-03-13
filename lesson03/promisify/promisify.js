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
readFileFunc('passwd', {encoding: 'utf-8'})
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });

var accessFunc = promisify(fs.access);
accessFunc('passwd', fs.constants.R_OK)
    .then(_ => {
        console.log('read');
    })
    .catch(err => {
        console.log('no access');
    });

function promisify(func) {
    return (data, parameters) => {
        return new Promise((resolve, reject) => {
            func(data, parameters, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            })
        });
    }
}
