//"\s": se utiliza para buscar cualquier tipo de espacio en blanco, incluyendo espacios, tabulaciones, retornos de carro, alimentaciones de formulario y nuevas líneas. Por ejemplo, la expresión regular "\s+" buscaría uno o más espacios en blanco en una cadena de texto. \s == [\r\t\f\n\v]


// Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result)

//Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

// /Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result2 = sample2.match(countNonWhiteSpace);
console.log(result2);

//OTRAS SECUENCIAS DE ESCAPE incluidas en \s
// let r = "Este es un ejemplo de texto con un retorno de carro.\rY este es otro párrafo.";

// let t = "Este es un ejemplo de texto con una tabulación.\tY este es otro párrafo.";

// let f = "Este es un ejemplo de texto con una alimentación de formulario.\fY este es otro párrafo.";

// let n = "Este es un ejemplo de texto con una nueva línea.\nY este es otro párrafo.";

// console.log(r+'\n'+t+'\n'+f+'\n'+n)