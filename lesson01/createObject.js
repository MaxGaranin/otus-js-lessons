function inherit(proto) {
  function F() {}
  F.prototype = proto;
  var object = new F;
  return object;
}

var machine = {
  isWork: true
};

var car = inherit(machine);

alert( car.isWork );