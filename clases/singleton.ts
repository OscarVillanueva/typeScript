
class Singleton {

    public static shared: Singleton
    public name: string

    private constructor( name: string ) {
        this.name = name
    }

    static getInstance = () : Singleton => {
        
        if( !Singleton.shared ) 
            Singleton.shared = new Singleton("Singleton")

        return Singleton.shared

    }
    

}

const real : Singleton = Singleton.getInstance()