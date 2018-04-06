
var promise0 = Promise.resolve(4),
    promise1 = Promise.resolve(3),
    promise2 = Promise.resolve(2);

const sumFn = function (previousValue, currentValue) {
    return previousValue + currentValue;
}

promiseReduce([promise0, promise1, promise2], sumFn, 0)
    .then(res => console.log(res))

function promiseReduce(promises, func, initValue) {
    var resultPromise = new Promise((resolve, reject) => {
        Promise
            .all(promises)
            .then(results => {
                var res = results.reduce(func);
                resolve(res);
            });
    });

    return resultPromise;
}