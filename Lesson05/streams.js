const Readable = require('stream').Readable;

class Counter extends Readable {
    constructor(opt) {
        super(opt);
        this._max = 500; // Генерируем 500 чисел
        this._index = 1;
    }

    _read() {
        var i = this._index++;
        if (i > this._max)
            this.push(null);
        else {
            // Генерируем случайные числа от 0 до 100
            var value = Math.floor(Math.random() * 100);
            this.push(value);
        }
    }
}

const Writable = require('stream').Writable;

class ConsoleWriter extends Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, callback) {
        // Вывод данных в консоль
        process.stdout.write(chunk.toString() + ' ');
        callback();
    }
}

const Transform = require('stream').Transform;

class MyTransformer extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        // Добавляем случайное число от 0 до 10 
        var delta = Math.floor(Math.random() * 10);
        chunk = chunk + delta;
        this.push(chunk);
        callback();
    }
}

var options = {
    objectMode: true, // передача объектов, а не байтов
    highWaterMark: 5  // количество объектов в буфере
};

var counter = new Counter(options);
var consoleWriter = new ConsoleWriter(options);
var myTransformer = new MyTransformer(options);

counter.pipe(myTransformer).pipe(consoleWriter);
