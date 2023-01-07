const nombres = `
Felipe Moreno
Carlos Santan
Eduardo Jimenez
Marlon Molina
Connor McGregor
`;

console.log(nombres.match(/^([A-Z][a-z][A-Z]?[a-z]+ ?){1,2}/mg));