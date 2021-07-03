class Avenger {

    public name: string
    protected team: string // detro de las clase y subclases

    private realName: string
    private fight: boolean = false
    private victories: number = 0

    constructor( name:string , team:string , realName: string) {

        this.name = name
        this.team = team
        this.realName = realName

    }

    public bio = () : void => {
        
        const message: string = `${this.name} ${this.realName} ${this.team}`
        console.log(`message`, message)

    }
    
    private changeTeam = (newTeam: string): boolean => this.team !== newTeam 

    public changeTeamPublic = (newTeam: string): boolean => this.changeTeam( newTeam )

}

const antman: Avenger = new Avenger( "AntMan", "Captain", "Scott Lang")

antman.bio()
antman.changeTeamPublic( "Ironman" )
