function aaa() {
    let promise = new Promise((resolve, reject) => {
        // resolve();
    }).then(() => {
        console.log('zzzz');
    }).catch((e) => {
        console.log(e);
    });

    return promise;
}

function promiseTest() {
    function someFunc(callback) {
        setTimeout(function () {
            console.log('somefunc');
            stopFlag = true;
            callback();
        }, 5)
    }

    let promise = Promise.resolve();

    var lastIndex = -1;
    var stopFlag = false;

    let i = 2;
    // for (let i = 0; i < 3; i++) {
        promise = promise.then(() => {
            return new Promise((resolve, reject) => {
                lastIndex = i;
                someFunc(resolve);
            });
        });

        promise = promise.then(() => {
            return new Promise((resolve, reject) => {
               console.log("i = ", i);
               if (stopFlag) {
                   reject('Reject from cycle');
               }
            });
        })
    // }

    promise = promise.then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log('func with Reject');
                reject('MyError');
            }, 1)
        });
    });

    promise = promise.then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log('func Last');
                resolve();
            }, 1)
        });
    });

    promise = promise.catch((e) => {
        console.log('Error: ' + e);
    });

    return promise;
}

// aaa();

promiseTest().then(() => {
    console.log('after calc');
});

