// * = cero o mas (greedy)
// + = uno o mas
// ? = cero o uno

//Encuentrame todos los digitos que quieras pero al final debe haber una \w

const frase = 'Esta frase puede contener 0 o mas caracteres';
const busqueda = frase.match(/.*/); //Agarralo todo.
console.log(busqueda[0]);

const frase2 = 'Esta frase tiene 1 o mas caracteres';
const busqueda2 = frase2.match(/.+/);
console.log(busqueda2[0]);

const vacio = '';
const greedy = vacio.match(/.*/); //Te encuentro asi no existas
const unoOmas = vacio.match(/.+/); //Te encuentro si eres 1 caracter o mas

console.log(`Greedy (*): ${greedy}
Uno o mas (+n): ${unoOmas}`)


const palabras = 'Esto es una frase de palabras';
//Encuentra todas las palabras que finalicen con un espacio
const busquedaGreedy = palabras.match(/\w*\s/g); //te encuetro si existes o no pero que despues haya un espacio, si existes agarro todo lo que encuentre, lo quiero todo.
const busquedaLazy = palabras.match(/\w?\s/g); //Te encuentro si no existes o si existes solo una vez.
console.log(`Greedy: ${busquedaGreedy}
Lazy: ${busquedaLazy}`);