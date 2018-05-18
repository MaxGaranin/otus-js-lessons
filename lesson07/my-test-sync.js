const seriesSync = require('./series').seriesSync;

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

seriesSync(fn1, fn2, fn3, fn4);
console.log('Interrupt on 3');
console.log(isRunFn1);
console.log(isRunFn2);
console.log(isRunFn3);
console.log(isRunFn4);
console.log('----------');

console.log('Init variables');
isRunFn1 = false;
isRunFn2 = false;
isRunFn3 = false;
isRunFn4 = false;

seriesSync();
console.log('No functions');
console.log(isRunFn1);
console.log(isRunFn2);
console.log(isRunFn3);
console.log(isRunFn4);
console.log('----------');





