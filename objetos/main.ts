// Objetos
type Hero = {
    name: string
    age: number
    skills: string[]
    getName: () => void
}

let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    skills: [ "Puede correr muy rapido", "Viajar en el tiempo" ],
    getName: () => console.log("hola")
}

let superman: Hero = {
    name: "clark Ken",
    age: 500,
    skills: [ "Puede volar" ],
    getName: () => console.log("hola")
}

// Union de tipos
let dummy: string | number | Hero = "Javier"

dummy = 10

dummy = {
    name: "clark Ken",
    age: 500,
    skills: [ "Puede volar" ],
    getName: () => console.log("hola")
}

// Comprobación de tipo
let thing: any = 123

if ( typeof thing === "number" ) console.log("Es un número")
else console.log("No es un número")