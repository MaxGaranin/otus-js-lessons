const Readable = require('stream').Readable;

class Counter extends Readable {
    constructor(opt) {
        super(opt);
        this._max = 500;
        this._index = 1;
    }

    _read() {
        var i = this._index++;
        if (i > this._max)
            this.push(null);
        else {
            var value = Math.random();
            var str = value.toString() + ';';
            var buf = Buffer.from(str, 'ascii');
            this.push(buf);
        }
    }
}

const Writable = require('stream').Writable;

class ConsoleWriter extends Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, callback) {
        process.stdout.write(chunk);
        callback();
    }
}

const Transform = require('stream').Transform;

class MyTransformer extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        //var s = cvt.bytesToString(chunk);
        this.push(chunk);
        callback();
    }
}

var counter = new Counter();
var consoleWriter = new ConsoleWriter();
var myTransformer = new MyTransformer();

counter.pipe(myTransformer).pipe(consoleWriter);
