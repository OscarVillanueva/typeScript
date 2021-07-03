interface Xmens {
    name: string
    realname?: string
    regenate : () => void
}

class Mutante implements Xmens {
    name: string = ""
    regenate = () => {}
}