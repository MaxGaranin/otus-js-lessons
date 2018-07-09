module.exports.Agent = class Agent {
    constructor(me, counts, values, max_rounds, log) {
        this.counts = counts;
    }

    compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
      }
      
    compare() {
      var arr = [ 1, 15, 2 ];
      
      arr.sort(this.compareNumeric);
      
      console.log(arr);  // 1, 2, 15
    }
}

function User(name, age){
     
    this.name = name;
    this.age = age;
    this.displayInfo = function(){
         
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}
User.prototype.sayHi = function() {
    console.log(`Привет, меня зовут ${this.name}`);
};
 
module.exports.User = User;