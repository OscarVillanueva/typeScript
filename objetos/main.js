var flash = {
    name: "Barry Allen",
    age: 24,
    skills: ["Puede correr muy rapido", "Viajar en el tiempo"],
    getName: function () { return console.log("hola"); }
};
var superman = {
    name: "clark Ken",
    age: 500,
    skills: ["Puede volar"],
    getName: function () { return console.log("hola"); }
};
// Union de tipos
var dummy = "Javier";
dummy = 10;
dummy = {
    name: "clark Ken",
    age: 500,
    skills: ["Puede volar"],
    getName: function () { return console.log("hola"); }
};
// Comprobación de tipo
var thing = 123;
if (typeof thing === "number")
    console.log("Es un número");
else
    console.log("No es un número");
