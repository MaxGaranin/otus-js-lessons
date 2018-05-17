interface ISquare {
    readonly width: number;
    calculateArea();
}

class Square implements ISquare {
    width: number;
    calculateArea() {
        return this.width * this.width;
    }
}

let square: Square = new Square();
square.width = 2;

var area = square.calculateArea();

console.log(area);
