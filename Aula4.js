var input = require("fs").readFileSync("stdin2","utf8");

    var N = 3.14159
    var R = parseFloat(input);

    var A = N * Math.pow(R,2);

console.log("A = " + A.toFixed(4));