const numeros = require('fs')
.readFileSync('stdin224', 'utf8').split('\n')
.map(x => Number(x));

for (let n of numeros) {
    if (n === 0) {
        break;
    }


let soma = 0;

if (n % 2 !== 0) {
    n++;
}

for (let i = 0; i < 5; i++) {
    soma += n + i * 2;
}

console.log(soma);
}