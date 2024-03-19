const [A, B, C] = require('fs')
.readFileSync('stdin102', 'utf-8')
.split(' ').map(x => Number(x));

const DELTA = (B * B) - (4.0 * A * C)

    if (DELTA < 0 || A === 0) {
        console.log('Impossível Calcular')
    }   
    else {
        var R1 = (-B + Math.sqrt(DELTA)) / (2.0 * A);
        var R2 = (-B - Math.sqrt(DELTA)) / (2.0 * A);
        console.log(`R1 = ${R1.toFixed(5)}`);
        console.log(`R2 = ${R2.toFixed(5)}`);
    }
