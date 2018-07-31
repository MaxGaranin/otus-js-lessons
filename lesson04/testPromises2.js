console.log('Start.');
process().then(() => {
    console.log('Finish.');
});

function process() {
    let p = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Zorro!');
            resolve('Zorro');
        }, 1000);
    });

    p = p.then(result => printName(result));

    p = p.then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log('Vinni!');
                resolve('Vinni');
            }, 1000);
        })
    });

    p = p.then(result => printName(result));

    return p;
}

function printName(name) {
    console.log(`Done ${name}!`);
}