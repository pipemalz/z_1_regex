//[a-z] Letras minusculas de desde la a hasta la z
//[0-9] Numeros del 0 al 9
//[A-Z] Letras mayusculas desde la A hasta la Z
//[a-zA-Z] letras minusculas y letras mayusculas de la a y A hasta la z y Z
//[a-fB-C2-5] letra minusculas de la a hasta f, letras mayusculas de la B hasta la C y numeros del 2 al 5. #F0AFFF
//Se puede personalizar tanto como queramos.


const texto = 'Tengo mucho sueño, me iré a mi querido pueblo Buenaventura a dormir desde las 10:30AM hasta las 4:00 PM hasta luego.';


console.log(texto.match(/[a-z]/g));
console.log(texto.match(/[A-Z]/g));
console.log(texto.match(/[a-fB-C2-5]/g));

//Validar si un valor es un color css hexadecimal.

const valor = '#AC7DF1';
const regExp = /#[a-fA-F0-9]{6}/;
console.log(regExp.test(valor));