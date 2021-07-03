class Villian { 

    private _name: string | undefined

    constructor(name ?: string) {

        this._name = name

    }
    
    public get name() : string {
        return this._name ? this._name : "No tiene nombre"
    }
    
    
    public set name(v : string) {

        if( v.length < 3 ) return 

        this.name = v;
    }
    

}

const joker : Villian = new Villian("Joker")
joker.name = "Duende Verde"
console.log(`joker.name`, joker.name)