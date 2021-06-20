
// Booleans
let isSuperMan: boolean = true 
let isBatman: boolean

if ( isSuperMan ) console.log("Estamos salvados")

else console.log("Ooopss")

isSuperMan = switchToClark()

function switchToClark() {
    return false
}

// Numeros
let avengers: number = 5
let villians: number

villians = 1.4

if( avengers > villians ) console.log("estamos salvados")

else console.log( "Estamos muertos" )

// Strings
let batman: string = "Batman"
let greenLantern: string = 'Literna Verde'
let acuaman: string = `Acuaman`

console.log(`batman`, batman)
console.log(`acuaman`, acuaman)
console.log(`greenLantern`, greenLantern)
console.log(`Heros`, `Los heroes son: ${batman} - ${greenLantern} - ${greenLantern}`)

// Any
let avenger: any = "Superman"
let exists
let defets

avenger = "Dr. Strange"
console.log(`avenger`, avenger)

avenger = 12.2
console.log(`avenger`, avenger)

avenger = true
console.log(`avenger`, avenger)

// Arreglos
let array: number[] = [ 1, 2, 3, 4 ]
array.push( 5 )

let villiansA: string[] = [ "Joker", "Rino" ]
console.log(`villiansA.length`, villiansA.length)

// Tuplas - se suele hacer para hacer arreglos finitos
let hero: [ string, number, boolean ] = [ "Dr. Strange", 100, true ]

// Una cosa a tomar encuenta es que al ser una arreglo se le pueden agreagar nuevas cosas
hero.push( true )

// Enum
enum Volume {
    min,
    mid,
    high
}
let audio: number = Volume.mid
console.log(`audio`, audio)

// Void
const callBatman = () : void => {
    console.log("Mostrar la batiseñal")
}

// Never - Para indicar que la aplicación fallo, marcar lineas de código que nunca deben se suceder
function error( message: string ) : never {
    
    throw new Error(message);
    
}

// Assertions - Castings
let temp: any = "Cualquier cosa"
let count: number = (<string>temp).length

// Null - Undefined
let empty: undefined = undefined
let crash: null = null