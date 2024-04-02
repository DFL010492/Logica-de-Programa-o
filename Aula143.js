let ENTRADA =(require('fs').readFileSync('stdin143','utf8')).split('\n');

// para criar a variavel I que seria o 3, para dizer quantos calculos ira fazer
const N = ENTRADA.shift();

// sempre começa pela letra I/ ++ é um incremento, vai identificar q tem o mesmo calculo nas linhas posteriores
for (let I = 0; I < N; I++) {
    const [A, B, C] = ENTRADA.shift().split(' ');
    console.log(((A * 2 + B * 3 + C * 5) / 10).toFixed(1));
};
