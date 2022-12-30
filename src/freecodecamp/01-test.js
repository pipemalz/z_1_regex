const myString = 'Hola mucho gusto, me llamo texto';
const myRegex = /mucho/;
let result = myRegex.test(myString);
console.log(result);

const wrongRegex = /Mucho/;
result = wrongRegex.test(myString);
console.log(result);

