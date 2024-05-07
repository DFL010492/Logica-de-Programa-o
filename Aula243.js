var input = require('fs').readFileSync('stdin243', 'utf8');

const entrada = require('fs').readFileSync('stdin243', 'utf8').split('\n').map(x => Number(x));

const pares = [];
const impares = [];

for (let i = 0; i < 15; i++) {
    const n = entrada.shift();


if (impares.length === 5) {
    imprimeNumeros(impares, false);
}
else if (pares.length === 5) {
    imprimeNumeros(pares, true);
}

if (n % 2 === 0) {
    pares.push(n);
}
else {
    impares.push(n);
}

}

if (impares.length > 0) {
    imprimeNumeros(impares, false);
}
if (pares.length > 0) {
    imprimeNumeros(pares, true);
}

function imprimeNumeros (numeros, saoPAres) {
    for (let i = 0; i < numeros.length; i++) {
        console.log(`${saoPAres ? 'par' : 'impares'}[${i}] = ${numeros[i]}`);
    }
    numeros.length = 0;
}
