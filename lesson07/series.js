var fn1 = function (next) {
    console.log('Function 1...');
    next();
}

var fn2 = function (next) {
    console.log('Function 2...');
    next('hello, world');
}

var fn3 = function (next) {
    console.log('Function 3...');
    next();
}

var fn4 = function (next) {
    console.log('Last function...');
    next();
}

series(fn1, fn2, fn3, fn4);

function series(...fns) {
    let stopFlag = false;

    function next(...args) {
        if (args.length > 0) {
            stopFlag = true;
        }
    }

    for (let i = 0; i < fns.length; i++) {
        if (stopFlag) {
            fns[fns.length - 1](next);
            break;
        }
        else {
            fns[i](next);
        }
    }
}