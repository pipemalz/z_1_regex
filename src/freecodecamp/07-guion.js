//Match all the letters in the string quoteSample.
//Note: Be sure to match both uppercase and lowercase letters.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; //todas las letras entre la a y la z
//tambien serviria en orden alfabetico el "-" es un rango. ej: "a-d" letras de la a a la d segun el alfabeto.
let result = quoteSample.match(alphabetRegex);

console.log(result)

//Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
//Tambien funciona con numeros ej [0-9] y se puede combinar con letras ej [1-4a-h]

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result2 = quoteSample2.match(myRegex); // Change this line
console.log(result2);