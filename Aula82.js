const input = require("fs").readFileSync("stdin82","utf8");

let SENGUNDOS = parseInt(input);

const VALORES = [3600, 60, 1];
const RESULTADO = [];
    
    for (let VAL of VALORES)
    {RESULTADO.push(parseInt(SENGUNDOS / VAL));
    SENGUNDOS = SENGUNDOS % VAL;
    }

console.log(RESULTADO);