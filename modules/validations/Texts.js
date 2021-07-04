"use strict";
exports.__esModule = true;
exports.getError = void 0;
var messages = [
    "El texto es muy corto",
    "El texto es muy largo"
];
var getError = function (numError) {
    if (numError > messages.length)
        return "Código no existente";
    return messages[numError];
};
exports.getError = getError;
