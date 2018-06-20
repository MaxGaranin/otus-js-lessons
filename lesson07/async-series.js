function seriesAsync(...fns) {
    if (fns.length == 0) return Promise.resolve();

    function next(...args) {
        // Цепочка прерывается при запуске next() с каким-либо аргументом
        if (args.length > 0) {
            stopFlag = true;
        }
    }

    // Флаг проверки запуска функции next на каждой функции цепочки
    let isExecuted = false;

    // Глобальный флаг, после установки которого прерывается цепочка выполнения 
    // и выполняется последняя функция
    let stopFlag = false;

    var lastIndex = -1;

    let promise = Promise.resolve();

    for (let i = 0; i < fns.length; i++) {
        promise = promise.then(() => {
            lastIndex = i;
            return new Promise((resolve, reject) => {
                try {
                    // Если аргумент не явлется функцией, прерываем цепочку выполнения
                    if (!isFunction(fns[i])) {
                        stopFlag = true;
                        reject("Series was interrupted");
                    }

                    fns[i](next, resolve);

                    // Если дошли до этого места, то next не была запущена, прерываем цепочку выполнения
                    stopFlag = true;
                }
                catch (e) {
                    // Если возникла ошибка в функции, прерываем цепочку выполнения
                    stopFlag = true;
                }
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
                if (isFunction(fns[fns.length - 1])) {
                    fns[fns.length - 1](next, resolve);
                }
            }
        });
    });

    return promise;
}

function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

module.exports = seriesAsync;
