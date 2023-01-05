// {1} = Una vez, {2} dos veces, {20} veinte veces.
// {2, 10} = de 2 a 10 veces, {5, 8} de 5 a 8 veces.
// {1, } = Una o mas veces,  {21,} veintiuna o mas veces.

const texto = 'AA AAA AAAA AAAAA AAAAAAA '

console.log(texto.match(/A{1,}\s/g)); // UNA O MAS VECES

console.log(texto.match(/A{4}\s/g)); // CUATRO VECES

console.log(texto.match(/A{3,5}\s/g)); // DE TRES A SEIS VECES