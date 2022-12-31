
let repeatStr = "row row row your boat";

let repeatRegex = /(\w+) \1 \1/g;

console.log(repeatStr.match(repeatRegex))

// \1 == (...)
let string = 'This is the group of this is is is at at at this a group';
console.log(string.match(/(\w+) \1 \1/g))


//Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);

console.log(result)

console.log(repeatNum.match(reRegex))