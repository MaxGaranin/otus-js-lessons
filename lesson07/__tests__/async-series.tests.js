const seriesAsync = require('../async-series');

var isRunFn1 = false;
var isRunFn2 = false;
var isRunFn3 = false;
var isRunFn4 = false;

function init() {
    isRunFn2 = false;
    isRunFn3 = false;
    isRunFn4 = false;
    isRunFn1 = false;
}

var fn1 = function (next, callback) {
    setTimeout(function () {
        isRunFn1 = true;
        next();
        if (callback) callback();
    }, 1);
}

var fn2 = function (next, callback) {
    setTimeout(function () {
        isRunFn2 = true;
        next("hello world");
        if (callback) callback();
    }, 1);
}

var fn3 = function (next, callback) {
    setTimeout(function () {
        isRunFn3 = true;
        next();
        if (callback) callback();
    }, 1);
}

var fn4 = function (next, callback) {
    setTimeout(function () {
        isRunFn4 = true;
        next();
        if (callback) callback();
    }, 1);
}

describe('Test series() function', () => {
    beforeEach(init);

    it('Run series() with 4 functions, interrupt on 3, last function in invoked', () => {
        seriesAsync(fn1, fn2, fn3, fn4).then(() => {
            expect(isRunFn1).toBe(true);
            expect(isRunFn2).toBe(true);
            expect(isRunFn3).toBe(false);
            expect(isRunFn4).toBe(true);
        });
    });

    it('Run series with no functions', () => {
        seriesAsync().then(() => {
            expect(isRunFn1).toBe(false);
            expect(isRunFn2).toBe(false);
            expect(isRunFn3).toBe(false);
            expect(isRunFn4).toBe(false);
        });
    });
});