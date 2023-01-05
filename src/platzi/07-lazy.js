const texto = '123,1232,12312,14,1212,124,214';

console.log(texto.match(/.+,/g)); //Me da u solo match porque coje todo lo que encuentra sin respetar si existen varios resultados que cumplan la condicion por eso es greedy o avaro.
console.log(texto.match(/.+?,/g)); //Me da varios match porque no agarra todo, realiza matches lo mas cortos posibles por eso es lazy o perezoso.