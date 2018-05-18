const seriesSync = require('../series').seriesSync;

var isRunFn2 = false;
var isRunFn3 = false;
var isRunFn4 = false;
var isRunFn1 = false;

function init() {
    isRunFn2 = false;
    isRunFn3 = false;
    isRunFn4 = false;
    isRunFn1 = false;
}

var fn1 = function (next) {
    isRunFn1 = true;
    next();
}

var fn2 = function (next) {
    isRunFn2 = true;
    next("hello world");
}

var fn3 = function (next) {
    isRunFn3 = true;
    next();
}

var fn4 = function (next) {
    isRunFn4 = true;
    next();
}

describe('Test series() function', () => {
    it('Run series() with 4 functions, interrupt on 3, last function in invoked', () => {
        init();
        seriesSync(fn1, fn2, fn3, fn4);
        expect(isRunFn1).toBe(true);
        expect(isRunFn2).toBe(true);
        expect(isRunFn3).toBe(false);
        expect(isRunFn4).toBe(true);
    });

    it('Run series with no functions', () => {
        init();
        seriesSync();
        expect(isRunFn1).toBe(false);
        expect(isRunFn2).toBe(false);
        expect(isRunFn3).toBe(false);
        expect(isRunFn4).toBe(false);
    });
});