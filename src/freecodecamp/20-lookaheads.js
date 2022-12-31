// Lookaheads son patrones que le dicen a JavaScript que busque más adelante en una cadena de texto para buscar patrones más adelante. Esto puede ser útil cuando quieres buscar múltiples patrones en la misma cadena.

// Los lookaheads se representan con la sintaxis (?=) para lookahead positivo y (?!) para lookahead negativo. El lookahead positivo busca un patrón seguido de otro patrón específico, mientras que el lookahead negativo busca un patrón seguido de cualquier cosa excepto otro patrón específico.

// Por ejemplo, si quieres buscar todas las palabras que comienzan con "Java" y terminan con "Script", puedes usar un lookahead positivo de la siguiente manera:

// /\bJava(?=Script)\b/g
// Esto buscará todas las palabras que comienzan con "Java" y tienen "Script" inmediatamente después.

// Por otro lado, si quieres buscar todas las palabras que comienzan con "Java" y no terminan con "Script", puedes usar un lookahead negativo de la siguiente manera:

// /\bJava(?!Script)\b/g
// Esto buscará todas las palabras que comienzan con "Java" y no tienen "Script" inmediatamente después.

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=.*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);


// Busca todas las palabras que no terminene en "ui"
let string = "The quick brown fox jumps over the lazy dog.";
let pattern = /\w+(?!ui)/g;
console.log(string.match(pattern));
