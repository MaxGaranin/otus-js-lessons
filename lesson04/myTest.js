main();

function main() {
    console.log('start work');
    return;

    new Promise((resolve, reject) => {
        subMain(resolve, reject);
        resolve(21);
    })
        .then(data => {
            console.log(`result: ${data}`);
        })
        .catch(err => {
            console.log(`error: ${err}`);
        });
}

function subMain(resolve, reject) {
    setTimeout(function () {
        console.log('in function subMain');
    }, 300);
}