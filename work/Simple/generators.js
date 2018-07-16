
function* generateSequence() {
    yield 1;
    yield 2;
    // yield 3;
    return 3;
}

let generator = generateSequence();

// let one = generator.next();
// console.log(JSON.stringify(one));
//
// let two = generator.next();
// console.log(JSON.stringify(two));
//
// let three = generator.next();
// console.log(JSON.stringify(three));
//
// let four = generator.next();
// console.log(JSON.stringify(four));

for (item of generator) {
    console.log(JSON.stringify(item));
}