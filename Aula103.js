const input = require("fs").readFileSync("stdin103","utf-8");

let Intervalo = input.split('\n')

    if (input >= 0.0 && input <= 25.0) {
        Intervalo = 'Intervalo [0,25]';
    }
    else if (input > 25.0 && input <= 50.0) {
        Intervalo = 'Intervalo [25,50]';
    }
    else if (input > 50.0 && input <= 75.0) {
        Intervalo = 'Intervalo [50,75]';
    }
    else if (input > 75.0 && input <= 100.0) {
        Intervalo = 'Intervalo [75,100]';
    }
    else {
        Intervalo = 'Fora do Intervalo';
    }

console.log(Intervalo);