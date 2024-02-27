var input = require("fs").readFileSync("stdin1","utf8");

    var valores = input.split("\n");
    var A = parseInt(valores.shift());
    var B = parseInt(valores.shift());
    var X = A-B;

console.log("X = "+ X);