
// Decorador de clase
const consola = ( constructor: Function ) : void=> {
    console.log(constructor)
}

// Decorador factory
const printConsole = ( print: boolean ) : Function => {
    
    if( print ) return consola

    return () => {}

}


@printConsole( true )
class VilliansA {
    constructor( public name: string ) {}
}

// Decorador más real
const villianPlan = ( constructor: Function ) : void=> {
    
    constructor.prototype.printPlan = () => console.log(`El plan es dominar el mundo`)

}

function printable (this: any,  constructor: Function ) : void {
    
    constructor.prototype.print = () => console.log( this )

}

@printable
@villianPlan
class VilliansB {
    constructor( public name: string ) {}
}


let lex : VilliansB = new VilliansB("Lex Luthor")
// (<any>lex).villianPlan()

// Decoradores de métodos
function editable( isEditable : boolean): Function {

    return ( target: any, nameProperty : string, descriptionProperty : PropertyDescriptor) => {

        descriptionProperty.writable = isEditable

    }

}

class VilliansM {
    
    constructor( public name:string) {}

    // Para evitar sobre carga de los metodos
    @editable( false )
    plan = () => {
        console.log("Dominar el mundo")
    }
    
}

const lexM : VilliansM = new VilliansM("Lex")

lexM.plan = () => {
    console.log("El plan es cortar flores")
}

