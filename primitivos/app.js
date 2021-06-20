// Booleans
var isSuperMan = true;
var isBatman;
if (isSuperMan)
    console.log("Estamos salvados");
else
    console.log("Ooopss");
isSuperMan = switchToClark();
function switchToClark() {
    return false;
}
// Numeros
var avengers = 5;
var villians;
villians = 1.4;
if (avengers > villians)
    console.log("estamos salvados");
else
    console.log("Estamos muertos");
// Strings
var batman = "Batman";
var greenLantern = 'Literna Verde';
var acuaman = "Acuaman";
console.log("batman", batman);
console.log("acuaman", acuaman);
console.log("greenLantern", greenLantern);
console.log("Heros", "Los heroes son: " + batman + " - " + greenLantern + " - " + greenLantern);
// Any
var avenger = "Superman";
var exists;
var defets;
avenger = "Dr. Strange";
console.log("avenger", avenger);
avenger = 12.2;
console.log("avenger", avenger);
avenger = true;
console.log("avenger", avenger);
// Arreglos
var array = [1, 2, 3, 4];
array.push(5);
var villiansA = ["Joker", "Rino"];
console.log("villiansA.length", villiansA.length);
// Tuplas - se suele hacer para hacer arreglos finitos
var hero = ["Dr. Strange", 100, true];
// Una cosa a tomar encuenta es que al ser una arreglo se le pueden agreagar nuevas cosas
hero.push(true);
// Enum
var Volume;
(function (Volume) {
    Volume[Volume["min"] = 0] = "min";
    Volume[Volume["mid"] = 1] = "mid";
    Volume[Volume["high"] = 2] = "high";
})(Volume || (Volume = {}));
var audio = Volume.mid;
console.log("audio", audio);
// Void
var callBatman = function () {
    console.log("Mostrar la batiseñal");
};
// Never - Para indicar que la aplicación fallo, marcar lineas de código que nunca deben se suceder
function error(message) {
    throw new Error(message);
}
// Assertions - Castings
var temp = "Cualquier cosa";
var count = temp.length;
// Null - Undefined
var empty = undefined;
var crash = null;
