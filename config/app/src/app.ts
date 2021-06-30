/**
 * Sumar 10 años al heroe e imprimir
 * @param hero Heroe a imprimir
 * @param age Edad del heroe
 * @returns Concatenación del hero y edad
 */
const print2 = ( hero: string, age: number ): string => `${hero} ${age + 10}`

let hero: string = "Ricardo Tapia"
let age: number = 30

let message = print2( hero, age )

console.log(message)