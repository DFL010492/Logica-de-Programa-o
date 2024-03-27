const input = require("fs").readFileSync("STANDART52","utf8");

PALAVRA = input.split('');


if (PALAVRA === 'vertebrado') {
    PALAVRA = input.split();

    if (PALAVRA === 'ave') {
        PALAVRA = input.split();
    
        if (PALAVRA === 'carnivoro') {
            PALAVRA = input.split();
            animal = PALAVRA === 'carnivoro' ? 'aguia' : 'aguia';
        
        if ( PALAVRA === 'onivoro') {
            PALAVRA = input.split();
            animal = PALAVRA === 'onivoro' ? 'pomba' : 'pomba';
        }
        }
    }
}
    if (PALAVRA === 'mamifero') {
        PALAVRA = input.split();
        animal = PALAVRA === 'mamifero';


        if (PALAVRA === 'onivoro') {
            PALAVRA = input.split();
            animal = PALAVRA === 'onivorro' ? 'homem' : 'homem';
        }

        else {
            PALAVRA = input.split();
            animal = PALAVRA === 'herbivoro' ? 'vaca' : 'vaca';
        }
}

else {
    PALAVRA = input.split();
    animal = PALAVRA === 'invertebrado'
}

    if (PALAVRA === 'inseto'); {
        PALAVRA = input.split();
        animal = PALAVRA === 'inseto';
    }

        if (PALAVRA === 'hematofago') {
            PALAVRA = input.split();
            animal = PALAVRA === 'hematofago' ? 'pulga' : 'pulga';
        }

        else {
            PALAVRA = input.split();
            animal = PALAVRA === 'herbivoro' ? 'lagarta' : 'lagarta';
        }
    

    if (PALAVRA === 'anelideo') {
        PALAVRA = input.split();
        animal = PALAVRA === 'anelideo';
    }

        if (PALAVRA === 'hematofago') {
            PALAVRA = input.split();
            animal = PALAVRA === 'hematofago' ? 'sanguessuga' : 'sanguessuga'
        }

        else {
            PALAVRA = input.split();
            animal = PALAVRA === 'onivoro' ? 'minhoca' : 'minhoca'
        }
    

console.log(animal);
