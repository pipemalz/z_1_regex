// ^ principio de linea^\d\D+\d+$
// $ final de linea

//Encontrar solo la primera y la ultima linea
const texto = `3rgergwg0 3rgergwg0 3rgergwg0`;
console.log(texto.match(/^\d[\w ]+\d$/g));

