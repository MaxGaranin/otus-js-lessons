var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.calculateArea = function () {
        return this.width * this.width;
    };
    return Square;
}());
var square = new Square();
square.width = 2;
var area = square.calculateArea();
console.log(area);
