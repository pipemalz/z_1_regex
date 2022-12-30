//En expresiones regulares, una coincidencia codiciosa "Greedy" encuentra la parte más larga posible de una cadena que se ajusta al patrón de regex y la devuelve como una coincidencia. La alternativa se llama coincidencia perezosa, la cual encuentra la parte más pequeña posible de la cadena que satisface el patrón de regex.



let text = "<h1>Winter is coming</h1>";

//Lazy matching
console.log(text.match(/<.*?>/)); //Output = "<h1>"

//Greedy matching 
console.log(text.match(/<.*>/)); //Output = "<h1>Winter is coming</h1>"



const texto = "Hola como estas";

//greedy matching
console.log(texto.match(/c.*/)) //Output = "como estas"

//lazy matching
console.log(texto.match(/c.*?s/)); //Output = "como es"