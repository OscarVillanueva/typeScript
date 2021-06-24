var hero1 = "Flash";
function printHero() {
    return hero1;
}
var showBatiSignal = function () {
    return "Batiseñal activada";
};
console.log(printHero());
console.log(showBatiSignal());
// Parametros obligatorios
var fullName = function (name, lastName) { return name + " " + lastName; };
var name1 = fullName("Clark", "Kent");
// Parametros opcionales
var fullName2 = function (name, lastName) {
    return name + " " + (lastName && "");
};
var name2 = fullName2("Barry");
// Parametros por defecto
var capitalize = function (word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
};
var fullName3 = function (name, lastName, capitalized) {
    if (capitalized === void 0) { capitalized = false; }
    if (capitalized)
        return capitalize(name + " " + (lastName && ""));
    return name + " " + (lastName && "");
};
// Pametros REST
var unlimetedParams = function (name) {
    var restParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restParams[_i - 1] = arguments[_i];
    }
    return name + " " + restParams.join(" ");
};
console.log(unlimetedParams("Clark", "Joseph", "Kent"));
// Tipo funcion
var add = function (a, b) { return a + b; };
var greetings = function (name) { return "I'm " + name; };
var saveTheWorld = function () { return console.log("salvando al mundo"); };
var myFunction;
// myFunction = 10
myFunction = add;
myFunction(5, 5);
myFunction = greetings;
myFunction("Pepe");
myFunction = saveTheWorld;
myFunction();
