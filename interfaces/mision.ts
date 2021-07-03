
interface MarvelCharacter {
    name: string,
    power ?: string,
    regenerate: ( realname: string ) => void
}

const mission = (xmen: MarvelCharacter) : void=> {
    console.log(`xmen.name`, xmen.name)
}

let wolverine2: MarvelCharacter = {
    name: "Wolverine",
    power:"Regeneration",
    regenerate: ( realname: string ) => console.log( realname )
}

mission( wolverine2 )