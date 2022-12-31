//You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

//Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

console.log(result)

// To only specify the lower number of patterns, keep the first number followed by a comma.
// For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

//Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; // cuatro o mas z
let result2 = haRegex.test(haStr);
console.log(result2)

// To specify a certain number of patterns, just have that one number between the curly brackets.
//For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.

//Change the regex timRegex to match the word Timber only when it has four letter m's.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result3 = timRegex.test(timStr);
console.log(result3);
