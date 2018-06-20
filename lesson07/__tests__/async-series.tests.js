const seriesAsync = require('../async-series');

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

var fn1 = function (next, callback) {
    setTimeout(function () {
        isRunFn1 = true;
        console.log("isRunF1", isRunFn1);
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

var fnWithNotCallNext = function (next) {
    setTimeout(function () {
        isRunFnWithNotCallNext = true;
        if (callback) callback();
    }, 1);
}

var fnWithError = function (next) {
    setTimeout(function () {
        isRunFnWithError = true;
        throw new SyntaxError('Error in function fnWithError');
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

    it('Run series with 4 functions, second function does not call next()', () => {
        seriesAsync(fn1, fnWithNotCallNext, fn3, fn4).then(() => {
            expect(isRunFn1).toBe(true);
            expect(isRunFnWithNotCallNext).toBe(true);
            expect(isRunFn3).toBe(false);
            expect(isRunFn4).toBe(true);
        });
    });

    it('Run series with 4 functions, second function throw Error', () => {
        seriesAsync(fn1, fnWithError, fn3, fn4).then(() => {
            expect(isRunFn1).toBe(true);
            expect(isRunFnWithError).toBe(true);
            expect(isRunFn3).toBe(false);
            expect(isRunFn4).toBe(true);
        });
    });

    it('Run series with any NOT a functions', () => {
        seriesAsync(fn1, fn3, {}, fn4, []).then(() => {
            expect(isRunFn1).toBe(true);
            expect(isRunFn3).toBe(true);
            expect(isRunFn4).toBe(false);
        });
    });
});