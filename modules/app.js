"use strict";
exports.__esModule = true;
var Numbers_1 = require("./validations/Numbers");
var Texts = require("./validations/Texts");
console.log("messages", Texts.getError(0));
console.log("sub( 2, 1 )", Numbers_1["default"](2, 1));
