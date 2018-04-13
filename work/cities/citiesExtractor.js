const fs = require('fs');
const path = require('path')

const fileName = "./cities_yandex_utf.txt";
const resultFileName = "./result.txt";

fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;

    var resultStream = fs.createWriteStream(resultFileName);

    var lines = data.split('\r\n');
    lines.forEach(line => {
        tokens = line.split('\t');
        if (tokens.length > 1) {
            let code = tokens[0].trim();
            let city = tokens[1].trim();
            resultStream.write("{ id: " + code + ", city: '" + city + "' },\n");
        }
    });

    resultStream.end();
});

console.log('Done!');