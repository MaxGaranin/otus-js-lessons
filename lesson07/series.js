function series(...fns) {
    return new Promise((resolve, reject) =>
    {
        let stopFlag = false;

        function next(...args) {
            if (args.length > 0) {
                stopFlag = true;
            }
        }

        var promise = Promise.resolve();
        var lastIndex = -1;

        for (let i = 0; i < fns.length; i++) {
            promise = promise.then(() => {
                lastIndex = i;
                return new Promise((res, rej) => {
                    fns[i](next);
                    if (stopFlag) {
                        rej(new Error("Series was interrupted"));
                    }
                    else {
                        res();
                    }
                });
            });
        }

        promise.catch(() => {
            if (lastIndex < fns.length - 1) {
                fns[fns.length - 1](next);
            }
        });

        resolve();
    });
}

module.exports = series;
