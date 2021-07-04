const messages : string[] = [
    "El texto es muy corto",
    "El texto es muy largo"
]

export const getError = (numError: number) : string => {

    if ( numError > messages.length ) return  "Código no existente"

    return messages[ numError ] 

}  