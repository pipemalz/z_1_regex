// \D selecciona todo lo que no sea \d
// \W selecciona todo lo que no sea \w
// \S selecciona todo lo que no sea \s
// [^0-5a-c] ^ Niega lo que este dentro de los [], en este caso selecciona todo lo que no sea [0-5a-c]

const text = '1232342 7096- 096 743-11 53252 abcde fhcslsja iqur pvmnxdks';

console.log(text.match(/[^a-d]/g));
console.log(text.match(/\D/g));
console.log(text.match(/\W/g));
console.log(text.match(/\S/g));
console.log(text.match(/\S+/g));