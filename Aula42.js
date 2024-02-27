var input = require("fs").readFileSync("stdin3","utf8");

var valores = input.split("\n");

    var A = parseFloat(valores.shift());
    var B = parseFloat(valores.shift());

    var M = (A * 3.5 + B * 7.5)/ 11.0;

console.log("MEDIA = " + M.toFixed(5));