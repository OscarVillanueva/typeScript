var Validations;
(function (Validations) {
    Validations.validateDates = function (date) { return isNaN(date.valueOf()); };
})(Validations || (Validations = {}));
var Validations;
(function (Validations) {
    Validations.validateText = function (text) { return text.length > 3; };
})(Validations || (Validations = {}));
