main();

function main() {
    console.log('start work');

    Promise.resolve()
        .then(() => subMain(2))
        .then(data => {
            console.log(`result: ${data}`);
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

    // return new Promise((res, rej) => {
    //     setTimeout(function () {
    //         console.log('in function work');
    //         res(49 - value);
    //     }, 300);
    // });
}