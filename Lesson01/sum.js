function sum(a) {
  if (a === undefined) return 0;
    
  var currentSum = a;

  function f(b) {
    if (b === undefined) return currentSum;
    
    currentSum += b;
    return f;
  }

  return f;
}

console.log( sum(1)(2)() );
console.log( sum(3)(-1)(2)() );
console.log( sum() );
console.log( sum(7)() );