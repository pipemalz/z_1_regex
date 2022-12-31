//If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g
let palabra = 'Penguin';
console.log(/P(engui|umpki)n/.test(palabra));

// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

// Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

let myString = "Eleanor Martin Roosevelt";
let myRegex = /(?=^(Eleanor|Franklin))(?=.*\s)(?=.*Roosevelt$)/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

console.log(result);

