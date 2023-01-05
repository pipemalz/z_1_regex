// 1
// 12
// 123
// 1234
// 12345
// 12345678910
// 12345678910a
// 13453243

//El caracter punto o dot, representa cualquier caracter.

let texto = '123abc.?-^&*$#^@#$&^';

console.log(texto.match(/./));

console.log(texto.match(/...../));

console.log(texto.match(/./g));