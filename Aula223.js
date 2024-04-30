const n = Number(require('fs').readFileSync('stdin223', 'utf8').split('\n'));

function fatorial (x) {
    return x === 1 ? 1 : x * fatorial(x - 1);
}

console.log(fatorial(n));