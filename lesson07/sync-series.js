function seriesSync(...fns) {
    if (fns.length == 0) return;

    // Флаг проверки запуска функции next на каждой функции цепочки
    let isExecuted = false;

    // Глобальный флаг, после установки которого прерывается цепочка выполнения 
    // и выполняется последняя функция
    let stopFlag = false;

    function next(...args) {
        // Цепочка прерывается при запуске next() с каким-либо аргументом
        if (args.length > 0) {
            stopFlag = true;
        }
        isExecuted = true;
    }

    for (let i = 0; i < fns.length - 1; i++) {
        if (stopFlag) {
            if (isFunction(fns[fns.length - 1])) {
                fns[fns.length - 1](next);
            }
            break;
        }

        isExecuted = false;
        try {
            // Если аргумент не явлется функцией, прерываем цепочку выполнения
            if (!isFunction(fns[i])) {
                stopFlag = true;
                continue;
            }

            fns[i](next);

            // Если next не была запущена, прерываем цепочку выполнения
            if (!isExecuted) stopFlag = true;
        }
        catch (e) {
            // Если возникла ошибка в функции, прерываем цепочку выполнения
            stopFlag = true;
        }
    }
}

function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

module.exports = seriesSync;
