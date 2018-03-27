function sum(a) {
  if (arguments.length == 0)
    throw new SyntaxError("Without arguments must be only last brackets.");

  if (a === undefined)
    throw new SyntaxError("Can't sum undefined values.");

  var currentSum = a;

  function f(b) {
    if (arguments.length == 0)
      return currentSum;

    if (b === undefined)
      throw new SyntaxError("Can't sum undefined values.");

    currentSum += b;
    return f;
  }

  return f;
}

console.log(sum(1)(2)());
console.log(sum(3)(-1)(2)());
console.log(sum(7)());
console.log(sum());
console.log(sum()(5)());