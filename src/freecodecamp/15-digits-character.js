// Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

console.log(result)

// The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result2 = movieName2.match(noNumRegex).length;
console.log(result2)