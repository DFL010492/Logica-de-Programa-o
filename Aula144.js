const ENTRADA =(require('fs').readFileSync('stdin144','utf8')).split('\n');


const N = Number(ENTRADA.shift());

for (let i = 0; i < N; i++) {
    const [X, Y] = ENTRADA.shift().split(' ');
    const MENOR = Math.min(X, Y);
    const MAIOR = Math.max(X, Y);
    let soma = 0;

for (let i = MENOR + 1; i < MAIOR; i++) {
    if (i % 2 !== 0) {
        soma += i;
    };
    console.log(soma);
    }
}