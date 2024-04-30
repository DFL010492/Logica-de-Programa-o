const entrada = require('fs')
.readFileSync('stdin221', 'utf8').split('\n');

while (entrada.shift() !== '2002') {
    console.log('Senha Invalida')
}

console.log('Acesso Permitido');