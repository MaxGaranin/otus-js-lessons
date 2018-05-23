let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);
console.log('Set1: ', set1);
console.log('Set2:', set2);

let unionSet = new Set([...set1, ...set2]);
console.log('Union: ', unionSet);

let intersectSet = new Set(Array.from(set1).filter((value) => {
    return set2.has(value);
}));
console.log('Intersect: ', intersectSet);

let diffSet = new Set(Array.from(set1).filter((value) => {
    return !set2.has(value);
}));
console.log('Diff: ', diffSet);