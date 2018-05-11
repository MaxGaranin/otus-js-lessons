const series = require('../series');

var isRunFn1 = false;
var isRunFn2 = false;
var isRunFn3 = false;
var isRunFn4 = false;

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
        series(fn1, fn2, fn3, fn4).then(() => {
            expect(isRunFn1).toBe(true);
            expect(isRunFn2).toBe(true);
            expect(isRunFn3).toBe(false);
            expect(isRunFn4).toBe(true);
        });
    });

    it('Run series with no functions', () => {
        series().then(() => {
            expect(isRunFn1).toBe(false);
            expect(isRunFn2).toBe(false);
            expect(isRunFn3).toBe(false);
            expect(isRunFn4).toBe(false);
        });
    });
});