const [HORAINICIO, MINUTOINICIO, HORAFIM, MINUTOFIM] = 
require("fs").readFileSync("stdin121","utf-8").split(' ').map( x=> Number(x));

// Transforma horas em minutos
const MINUTOINICIAL = 60 * HORAINICIO + MINUTOINICIO;
const MINUTOFINAL = 60 * HORAFIM + MINUTOFIM;

// Relação de duração 
const MT = MINUTOFINAL > MINUTOINICIAL ?
MINUTOFINAL - MINUTOINICIAL : 

// Limitação das 24 horas
1440 - MINUTOINICIAL + MINUTOFINAL;

// Transformação horas e minutos para a saida
const HORAS = Math.floor(MT / 60);
const MINUTOS = MT % 60;


console.log(`O JOGO DUROU ${HORAS} HORA(S) E ${MINUTOS} MINUTO(S)`);