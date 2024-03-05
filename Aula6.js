var input = require("fs").readFileSync("stdin6","utf8");


var [A,B,C] = input.split(" ").map(item => parseFloat(item));
var PI = 3.14159;

    var AT = (A * C) / 2;
    var AC = PI * (Math.pow(C,2));
    var ATR = ((A + B) * C) / 2;
    var AQ = B * B;
    var AR = A * B;

console.log(" TRIANGULO: " + AT.toFixed(3));
console.log(" CIRCULO: " + AC.toFixed(3));
console.log(" TRAPEZIO: " + ATR.toFixed(3));
console.log(" QUADRADO: " + AQ.toFixed(3));
console.log(" RETANGULO: " + AR.toFixed(3));