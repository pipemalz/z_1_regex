//Encontrar todas las formas de escribir el numero telefonico, menos la ultima
const texto =
`
555658
56-58-11
56.58.11
56.78-98
65 09 87
76y87r98
`

console.log(texto.match(/(\d{2}\W?){3}/g));