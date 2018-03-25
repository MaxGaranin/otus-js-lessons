// const { Writable } = require('stream');
const Writable = require('stream').Writable;

class MyWritable extends Writable {
    constructor(options) {
        super(options);
        // ...
    }

    _write(chunk, encoding, callback) {
        process.stdout.write(chunk);
        callback();
    }
}