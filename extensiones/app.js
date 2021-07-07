"use strict";
exports.__esModule = true;
require("jquery");
require("sweetalert2");
console.log("Hola mundo");
$(document).ready(function () {
    $("h1").text("Hola desde TypeScript");
    $("p").text("Hola desde este parrafo");
});
$("#botAlerta").click(function () {
    alert("gola");
});
