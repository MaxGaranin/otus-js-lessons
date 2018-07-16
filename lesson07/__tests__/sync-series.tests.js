const seriesSync = require('../sync-series');

var isRunFn1 = false;
var isRunFn2 = false;
var isRunFn3 = false;
var isRunFn4 = false;
var isRunFnWithNotCallNext = false;
var isRunFnWithError = false;

function init() {
    isRunFn2 = false;
    isRunFn3 = false;
    isRunFn4 = false;
    isRunFn1 = false;
    isRunFnWithNotCallNext = false;
    isRunFnWithError = false;
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

var fnWithNotCallNext = function (next) {
    isRunFnWithNotCallNext = true;
}

var fnWithError = function (next) {
    isRunFnWithError = true;
    throw new SyntaxError('Error in function fnWithError');
}

describe('Test series() function', () => {
    beforeEach(init);

    it('Run series() with 4 functions, interrupt on 3, last function in invoked', () => {
        seriesSync(fn1, fn2, fn3, fn4);
        expect(isRunFn1).toBe(true);
        expect(isRunFn2).toBe(true);
        expect(isRunFn3).toBe(false);
        expect(isRunFn4).toBe(true);
    });

    it('Run series with no functions', () => {
        seriesSync();
        expect(isRunFn1).toBe(false);
        expect(isRunFn2).toBe(false);
        expect(isRunFn3).toBe(false);
        expect(isRunFn4).toBe(false);
    });

    it('Run series with 4 functions, second function does not call next()', () => {
        seriesSync(fn1, fnWithNotCallNext, fn3, fn4);
        expect(isRunFn1).toBe(true);
        expect(isRunFnWithNotCallNext).toBe(true);
        expect(isRunFn3).toBe(false);
        expect(isRunFn4).toBe(true);
    });

    it('Run series with 4 functions, second function throw Error', () => {
        seriesSync(fn1, fnWithError, fn3, fn4);
        expect(isRunFn1).toBe(true);
        expect(isRunFnWithError).toBe(true);
        expect(isRunFn3).toBe(false);
        expect(isRunFn4).toBe(true);
    });

    it('Run series with any NOT a functions', () => {
        seriesSync(fn1, fn3, {}, fn4, []);
        expect(isRunFn1).toBe(true);
        expect(isRunFn3).toBe(true);
        expect(isRunFn4).toBe(false);
    });
});