var input = require('fs').readFileSync('stdin241', 'utf8');

var lines = input.split('\n');

const x = require('fs')
.readFileSync('stdin241', 'utf8')
.split('\n')
.map(x => Number(x))
.map(x => x > 0 ? x : 1);

for (let i = 1; i < 11; i++) {
    console.log(`X[${i}] = ${x[i]}`);
}