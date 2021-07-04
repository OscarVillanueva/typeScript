/// <reference path="validations/Texts.ts" />
/// <reference path="validations/Dates.ts" />

if( Validations.validateText( "Barry Allen" ) ) {
    console.log("el texto es válido")
}
else console.log("no es válido")