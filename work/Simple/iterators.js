// var array = [1, "2", true];
//
// for (item of array) {
//     console.log(item);
// }

function* factorial() {
    yield 1;
    let current = 1;
    while(true) {
        for (let i = 0; i < current; i++) {

        }
        n = n * (n + 1);
        yield n;
    }
}

for (let value of factorial()) {
    console.log(value);
    if (value > 2000) break;
}

// function factorial(n) {
//     if (n == 0 || n == 1) return 1;
//
//     return n * factorial(n - 1);
// }