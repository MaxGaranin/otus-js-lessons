function sum(a) {
  if (a === undefined) throw new SyntaxError("Can't sum undefined values.");
  
  // Сначала хотелось сделать так, но в этом случае возникают проблемы с вызовом sum()
  // if (a === undefined) a = 0;  

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
console.log( sum(7)() );
console.log( sum() );
console.log( sum(undefined)(5)() );