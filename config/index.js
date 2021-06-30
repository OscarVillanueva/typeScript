/**
 * Sumar 10 años al heroe e imprimir
 * @param hero Heroe a imprimir
 * @param age Edad del heroe
 * @returns Concatenación del hero y edad
 */
var print2 = function (hero, age) { return hero + " " + (age + 10); };
var hero = "Ricardo Tapia";
var age = 30;
var message = print2(hero, age);
console.log(message);
