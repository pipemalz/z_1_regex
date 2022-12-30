//Extraer el resultado, solo extrae el primero

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(result);


let extractStr2 = "Extract the word 'Coding' from this string.";
let codingRegex2 = /extract/i;
let result2 = extractStr2.match(codingRegex2);

console.log(result2);

//Extraer todos los resultados ignorando mayuscula y minuscula g = todos las coincidencias i = ignorar mayus-minus

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result3 = twinkleStar.match(starRegex);
console.log(result3);
