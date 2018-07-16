const seriesAsync = require('./async-series');

var fn1 = function (next) {
    console.log('Function 1...');
    next();
}

var fn2 = function (next) {
    console.log('Function 2...');
    next("hello world");
}

var fn3 = function (next) {
    console.log('Function 3...');
    next();
}

var fn4 = function (next) {
    console.log('Last function...');
    next();
}

seriesAsync(fn1, fn2, fn3, fn4);
