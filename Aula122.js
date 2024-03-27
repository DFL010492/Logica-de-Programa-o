const input = require("fs").readFileSync("STANDART52", "utf8");

palavra = input.split(/\s+/);
console.log(palavra[2]);


if (palavra === 'vertebrado') {
    console.log(palavra[2]);
    palavra = input.split(/\s+/);
    if (palavra === ave) {
        palavra = input.split(/\s+/);
        animal = palavra === 'carnivoro' ? 'aguia' : 'pomba';
} 
    else {
        palavra = input.split(/\s+/);
        animal = palavra === 'onivoro' ? 'homem' : 'vaca';
    }
}
else {
    palavra = input.split(/\s+/);
    if (palavra === 'inseto') {
        palavra = input.split(/\s+/);
        animal = palavra === 'hematofago' ? 'pulga' : 'lagarta';
} 
    else {
        palavra = input.split(/\s+/);
        animal = palavra === 'hematofago' ? 'sanguesuga' : 'minhoca';
    }
}

console.log(animal);
