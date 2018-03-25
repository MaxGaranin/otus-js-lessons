
var promise0 = Promise.resolve(0),
    promise1 = Promise.resolve(1),
    promise2 = Promise.resolve(2);

promiseReduce([promise0, promise1, promise2], sumFn, 0)
    .then(res => console.log(res))

function promiseReduce(promises, func, initValue) {
    var result;

    var promise = new Promise(function(resolve, reject) {
        promises.array.forEach(p => {
            promise = promise
            .then(p)
            .then(x => result = func(result, x))
        });


        resolve();
    });

    return promise;
}