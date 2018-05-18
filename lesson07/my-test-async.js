const seriesAsync = require('./series').seriesAsync;

var isRunFn1 = false;
var isRunFn2 = false;
var isRunFn3 = false;
var isRunFn4 = false;

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

seriesAsync(fn1, fn2, fn3, fn4)
    .then(() => {
        console.log('Interrupt on 3');
        console.log(isRunFn1);
        console.log(isRunFn2);
        console.log(isRunFn3);
        console.log(isRunFn4);
        console.log();
    })
    .then(() => {
        console.log('Init variables');
        isRunFn1 = false;
        isRunFn2 = false;
        isRunFn3 = false;
        isRunFn4 = false;
    })
    .then(seriesAsync())
    .then(() => {
        console.log('No functions');
        console.log(isRunFn1);
        console.log(isRunFn2);
        console.log(isRunFn3);
        console.log(isRunFn4);
        console.log();
    });




