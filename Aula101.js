const input = require("fs").readFileSync("stdin101","utf8");

var linhas = input.split('\n')
const valores = linhas[0].split(' ').map(Number);

    function verificarvalores (A, B, C, D) {
        if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0) {
            console.log('Valores Aceitos');
        }
        else {
            console.log('Valores não Aceitos');
        }
    }

verificarvalores(...valores)