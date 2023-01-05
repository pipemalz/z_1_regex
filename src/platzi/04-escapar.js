//Para escapar un caracter especial o clase operadora que representa una busqueda por defecto, se utiliza la barra \, por ejemplo para escapar el punto se escribe "\."

const texto = 'Hola%';

console.log(texto.match(/Hola\./));

const texto2 = 'Cualquier palabra que termine en punto...';

console.log(texto2.match(/\w+\./));
console.log(texto2.match(/\w+\.+/));

