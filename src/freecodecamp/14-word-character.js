// \w: representa cualquier carácter alfanumérico (letras y dígitos) incluyendo el guion bajo "_". En inglés, este metacarácter se conoce como "word character" o "word character abbreviation". es una abreviación de la expresión /[A-Za-z0-9_]+/


console.log('¡¡¡¡Toda la vida es un injusto manjar!!!!'.match(/\w+/g));

// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);

// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

console.log('¡¡¡¡Toda la vida es un injusto manjar!!!!'.match(/\W+/g));

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

let quoteSample2 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result2 = quoteSample2.match(nonAlphabetRegex).length;
console.log(result2)