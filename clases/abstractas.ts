// Contenedor de propiedades y nombres heredados a otros
abstract class Mutants {

    constructor ( public name:string, public realName:string ){

    }

}

class Super extends Mutants {

}

const wolverine : Super = new Super("Wolverine", "logan")