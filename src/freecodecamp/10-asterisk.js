// /For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.


//Buscar letras que aparecen 0 o mas veces
let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';
// Only change code below this line

//buscar todas las A cuyo siguiente caracter sea a 
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result);