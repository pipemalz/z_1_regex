//Character classes - uso de los corchetes (brackets) []

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(`
    ${bigStr.match(bgRegex)},
    ${bagStr.match(bgRegex)},
    ${bugStr.match(bgRegex)},
    ${bogStr.match(bgRegex)}
`);

//Utiliza una clase de caracteres con vocales (a, e, i, o, u) en tu expresión regular vowelRegex para encontrar todas las vocales en la cadena quoteSample.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

console.log(result);