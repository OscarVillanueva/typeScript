class Avenger2 {
    
    constructor( public name:string, private realName:string ){
    }

    protected getName = (): string  => this.name

}

class Xmen extends Avenger2 {

    constructor(name:string, realName: string){

        super( name, realName )

    }

    public bio = () : string => this.getName()

}

// Toma el constructor por defecto de la clase padre, eso si no se tiene un constructor explicito
const ciclope : Xmen = new Xmen( "Ciclope", "Scott" )
ciclope.bio()