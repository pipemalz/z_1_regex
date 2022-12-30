//You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

//buscar letras que aparecen una o mas veces juntas

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result);

console.log(difficultSpelling.match(/s/ig));