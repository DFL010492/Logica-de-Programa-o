var input = require('fs').readFileSync('stdin262', 'utf8');
var lines = input.split('\n');
var n = lines[0];

var countLine = 0;
var score1 = 0;
var score2 = 0;

do {
    for (let i = 0; i < n; i++) {
        var linePosition = countLine + i + 1;
        var partida = lines[linePosition].split(' ');

        if (+partida[0] > +partida[1]) {
            score1++;
        }
        else if (+partida[0] < +partida[1]) {
            score2++;
        }
    }

    countLine += +n +1;

    n = lines[countLine];

    console.log(score1, score2);

    score1 = 0;
    score2 = 0;
}

while (n !== '0');