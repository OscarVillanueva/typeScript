var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador de clase
var consola = function (constructor) {
    console.log(constructor);
};
// Decorador factory
var printConsole = function (print) {
    if (print)
        return consola;
    return function () { };
};
var VilliansA = /** @class */ (function () {
    function VilliansA(name) {
        this.name = name;
    }
    VilliansA = __decorate([
        printConsole(true)
    ], VilliansA);
    return VilliansA;
}());
// Decorador más real
var villianPlan = function (constructor) {
    constructor.prototype.printPlan = function () { return console.log("El plan es dominar el mundo"); };
};
function printable(constructor) {
    var _this = this;
    constructor.prototype.print = function () { return console.log(_this); };
}
var VilliansB = /** @class */ (function () {
    function VilliansB(name) {
        this.name = name;
    }
    VilliansB = __decorate([
        printable,
        villianPlan
    ], VilliansB);
    return VilliansB;
}());
var lex = new VilliansB("Lex Luthor");
// (<any>lex).villianPlan()
// Decoradores de métodos
function editable(isEditable) {
    return function (target, nameProperty, descriptionProperty) {
        descriptionProperty.writable = isEditable;
    };
}
var VilliansM = /** @class */ (function () {
    function VilliansM(name) {
        this.name = name;
        // Para evitar sobre carga de los metodos
        this.plan = function () {
            console.log("Dominar el mundo");
        };
    }
    __decorate([
        editable(true)
    ], VilliansM.prototype, "plan");
    return VilliansM;
}());
var lexM = new VilliansM("Lex");
lexM.plan = function () {
    console.log("El plan es cortar flores");
};
