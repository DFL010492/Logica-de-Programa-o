const input = require("fs").readFileSync("stdin81","utf8");

let valor = parseInt(input);

    const NOTAS = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

    for (let nota of NOTAS) 
    {let QNOTAS = parseInt(valor / nota);
    console.log(`${QNOTAS} nota(s) de R$ ${nota},00`);
    valor = valor % nota
    }  