main();

function main() {
    console.log('start work');

    Promise.resolve()
        .then(() => subMain(2))
        .then(data => {
            console.log(`result: ${data}`);
        })
        // .then(new Promise((res, rej) => {    // Этот код странно работает, надо использовать тот, что ниже
        //     setTimeout(function () {
        //         console.log('qqqqqq');
        //         res();
        //     }, 300);
        // }))
        .then(() => {
            return new Promise((res, rej) => {
                setTimeout(function () {
                    console.log('aaaaaa');
                    res();
                }, 300);
            })
        })
        .then(data => {
            console.log('bbbbb');
        })
        .catch(err => {
            console.log(`error: ${err}`);
        });
}

function subMain(value) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            console.log('in function subMain');
            res(13 + value);
        }, 300);
    })
        .then(v => work(v));
}

function work(value) {
    console.log('in function work');
    return 49 - value;
}