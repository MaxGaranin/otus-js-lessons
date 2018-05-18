function seriesSync(...fns) {
    if (fns.length == 0) return;

    let stopFlag = false;

    function next(...args) {
        if (args.length > 0) {
            stopFlag = true;
        }
    }

    for (let i = 0; i < fns.length - 1; i++) {
        if (stopFlag) {
            fns[fns.length - 1](next);
            break;
        }
        else {
            fns[i](next);
        }
    }
}

function seriesAsync(...fns) {
    if (fns.length == 0) return Promise.resolve();

    function next(...args) {
        if (args.length > 0) {
            stopFlag = true;
        }
    }

    let stopFlag = false;
    var lastIndex = -1;

    let promise = Promise.resolve();

    for (let i = 0; i < fns.length; i++) {
        promise = promise.then(() => {
            lastIndex = i;
            return new Promise((resolve, reject) => {
                fns[i](next, resolve);
            });
        });

        promise = promise.then(() => {
            return new Promise((resolve, reject) => {
                if (stopFlag) {
                    reject("Series was interrupted");
                }
                else {
                    resolve();
                }
            });
        });
    }

    promise = promise.catch(() => {
        return new Promise((resolve, reject) => {
            if (lastIndex < fns.length - 1) {
                fns[fns.length - 1](next, resolve);
            }
        });
    });

    return promise;
}

module.exports.seriesSync = seriesSync;
module.exports.seriesAsync = seriesAsync;
