var input = require('fs').readFileSync('stdin261', 'utf8');
var lines = input.split('\n');

for (let i = 0; lines[i]; i++) {
    const atual = lines[i];
    const espaçoletras = atual.split('').reduce((acc, v, i) => (v === ' ' ? [...acc,i] : acc), []);
    const str = atual.split('').filter((v, i) => !espaçoletras.includes(i));


const res = str.map((v, i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase());

espaçoletras.forEach((v) => res.splice(v, 0, ' '));
// para separar e iguinorar a entrada

console.log(res.join(''));

};