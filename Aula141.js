let SALARIO = Number(require('fs').readFileSync('stdin141','utf8'));

//identificar que é numero flutuante 
let TAXA = 0.0;

// Tipo de construtor , atrelar uma variavel a outra 
const FAIXAS = new Map([
    [4500.00, 0.28],
    [3000.01, 0.18],
    [2000.01, 0.08]
]);

// VALOR = AOS VALORES DE FAIXAS ANTES DA VIRGULA/ ALIQUOTA = AOS VALORES DEPOIS DA VIRGULA
for (let [VALOR, ALIQUOTA] of FAIXAS) {
    if (SALARIO > VALOR) {
        DIFERENÇA = SALARIO - VALOR;
        //+= é se o valor maior ele faz a diferença e miltiplica o aliquota
        TAXA += DIFERENÇA * ALIQUOTA;
        SALARIO -= DIFERENÇA
    }
}

//O ? SERIA O if /O : SERIA O else 
console.log(TAXA === 0.0 ? 'Isento' : `R$ ${TAXA.toFixed(2)}`);