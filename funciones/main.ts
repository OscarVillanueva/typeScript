let hero1: string = "Flash"

function printHero() : string {
    return hero1
}

const showBatiSignal = () : string => {
    return "Batiseñal activada"
}

console.log( printHero() )
console.log( showBatiSignal() )

// Parametros obligatorios
const fullName = ( name: string, lastName: string ) : string => `${name} ${lastName}`
const name1 = fullName( "Clark", "Kent" );

// Parametros opcionales
const fullName2 = ( name: string, lastName ?: string) : string => {

    return  `${name} ${lastName && ""}`
}

let name2 = fullName2( "Barry" )

// Parametros por defecto

const capitalize = ( word: string ): string => {
    
    return word.charAt( 0 ).toUpperCase() + word.substr(1).toLowerCase()

}

const fullName3 = ( name: string, lastName : string, capitalized: boolean = false) : string => {

    if( capitalized ) return  capitalize( `${name} ${lastName && ""}` )

    return `${name} ${lastName && ""}`

}

// Pametros REST
const unlimetedParams = ( name: string, ...restParams: string[] ) : string => {
    
    return `${name} ${ restParams.join(" ") }`

}

console.log(unlimetedParams( "Clark", "Joseph", "Kent" ))

// Tipo funcion
const add = (a:number, b:number): number => a + b 
const greetings = ( name: string ): string => `I'm ${name}`
const saveTheWorld = () : void  => console.log("salvando al mundo")

let myFunction: Function
// myFunction = 10

myFunction = add
myFunction(5,5)

myFunction = greetings
myFunction( "Pepe" )

myFunction = saveTheWorld
myFunction()