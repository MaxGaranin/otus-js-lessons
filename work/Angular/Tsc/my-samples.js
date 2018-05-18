var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.run = function () { };
    __decorate([
        log
    ], MyClass.prototype, "run", null);
    return MyClass;
}());
function log(target, key, descriptor) {
    console.log(target, key);
}
new MyClass().run();
