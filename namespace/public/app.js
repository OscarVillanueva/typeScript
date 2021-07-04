var Validations;
(function (Validations) {
    Validations.validateText = function (text) { return text.length > 3; };
})(Validations || (Validations = {}));
var Validations;
(function (Validations) {
    Validations.validateDates = function (date) { return isNaN(date.valueOf()); };
})(Validations || (Validations = {}));
/// <reference path="validations/Texts.ts" />
/// <reference path="validations/Dates.ts" />
if (Validations.validateText("Barry Allen")) {
    console.log("el texto es válido");
}
else
    console.log("no es válido");
