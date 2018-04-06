
var promise0 = Promise.resolve(4),
    promise1 = Promise.resolve(3),
    promise2 = Promise.resolve(2);

const sumFn = function (previousValue, currentValue) {
    return previousValue + currentValue;
}

promiseReduce([promise0, promise1, promise2], sumFn, 0)
    .then(res => console.log(res))
    .catch(err => console.error(err));

function promiseReduce(promises, func, initValue) {
    var result = initValue;

    var chain = Promise.resolve();

    promises.forEach(p => {
        chain = chain
            .then(() => p)
            .then(x => result = func(result, x))
    });

    return chain;
}

