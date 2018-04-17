function User(fullName) {
    this.fullName = fullName;

    Object.defineProperty(this, "firstName",
    {
        get: function () {
            var tokens = this.fullName.split(" ");
            return tokens[0];
        },
        set: function (value) {
            var tokens = this.fullName.split(" ");
            this.fullName = value + " " + tokens[1];
        },
        enumerable: true,
        configurable: true
    });   
    
    Object.defineProperty(this, "lastName",
    {
        get: function () {
            var tokens = this.fullName.split(" ");
            return tokens[1];
        },
        set: function (value) {
            var tokens = this.fullName.split(" ");
            this.fullName = tokens[0] + " " + value;
        },
        enumerable: true,
        configurable: true
    });    
}

var vasya = new User("Василий Попкин");

console.log(vasya.firstName);
console.log(vasya.lasttName);

vasya.firstName = "Иван";
vasya.lastName = "Сидоров";

console.log(vasya.fullName);

