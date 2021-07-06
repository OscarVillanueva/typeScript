type Hero2 =  {
    name: string
    realname: string
}

type Villian2 = {
    name: string
    realname: string
}

const deadPool = {
    name: "DeadPool",
    realname: "Wade Winston Wilson",
    power: "Regeneración"
}

console.log( genericFunction<Hero2>(deadPool) )

function genericFunction <T>( arg: T ) {
    return arg
}

// Arreglo generico
const heroes : Array<string> = [ "Flash", "Batman", "Superman"]
heroes.push( "123" )

const villiansarr : string[] = [ "Lex Luthor", "Flash Reverse" ]

// Clases genericas
class Square<T extends number | string >{

    base!: T
    height!: T;

    area(): number {
        // Intenta convertirlo a un numero
        return +this.base * +this.height
    }

}

const square = new Square<string>()
square.base = "10"
square.height = "10"
console.log(`square.area()`, square.area())