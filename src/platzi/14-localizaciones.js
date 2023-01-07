//Entre 0 y 180, norte sur.

const coordenadas = `
-99.205646,19.429707,2275.10
-99.205581, 19.429652,2275.10
-99.204654,19.428952,2275.58
`;

console.log(coordenadas.match(/(-?\d{1,3}\.\d{1,6},\s?){2}.*$/gm));


const coordenadas2 = `
-99 12' 34.08"W, 19 34' 56.98"N
-34 54' 32.00"E, -3 21' 67.00"S
-334 54' 65.40"E, -3 21' 67.00"S
`;

console.log(coordenadas2.match(/^(-?\d{1,3}\s\d{1,2}'\s\d{1,2}\.\d{2}"[WENS],? ?){2}$/mg));