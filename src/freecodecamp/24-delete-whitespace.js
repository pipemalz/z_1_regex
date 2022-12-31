// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

const password = ' esto tiene espacios adelante y atras ';
console.log(password)
console.log(password.trim())


let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex,''); // Change this line

console.log(result)