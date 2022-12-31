// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

let favWord = "favorite";
let favRegex = /favou?rite/; // hace matching con favorite o favourite, haciendo que la u sea opcional al poner 'u?'
let result = favRegex.test(favWord);


console.log(/favou?rite/.test('favorite'))
console.log(/favou?rite/.test('favourite'))

