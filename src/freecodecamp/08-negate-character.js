//Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

//para negar se utiliza el simbolo ^

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Busca todo lo que sea una vocal o un numero
let result = quoteSample.match(myRegex); // Change this line

console.log(result);