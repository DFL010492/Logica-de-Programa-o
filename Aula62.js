const input = require("fs").readFileSync("stdin62","utf8");

const valores = input.split("\n");

    const [x1, y1] = valores[0].split(" ");
    const [x2, y2] = valores[1].split(" ");

    const DIS = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

console.log(DIS.toFixed(4));