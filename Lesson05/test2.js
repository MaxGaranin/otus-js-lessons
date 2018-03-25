const stream = require('stream')

const readable = (function () {
    const data = []
    const $ = new stream.Readable({
        objectMode: true,
        read() { }
    })
    return $
})()

readable.push({ a: 1 });
readable.push("Hello");
readable.push("world");

readable.on('data', (data) => {
    console.log(data)
})
.on('end', () => {
    console.log("End work")
})