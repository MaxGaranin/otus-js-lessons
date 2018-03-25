const stream = require('stream')

const writable = (function () {
    const data = []
    const $ = new stream.Writable({
        write(chunk, encoding, callback) {
            data.push(chunk.toString())
            callback()
        }
    })
    return $
})()

writable.write('some data')
writable.end('done writing data')

writable.on('finish', () => {
    console.log(writable.data);
    console.log('All writes are now complete.')
})
