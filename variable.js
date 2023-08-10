// This is a program for learning variable in JS

/* This is a multi-line
comment*/

// Variable
var title = "Is String"; // String
var visitorCount = 1234; //  Integer
let price = 23.45; // Float
const isAvailable = true; // Boolean

console.log(typeof(title))
console.log(typeof(visitorCount))
console.log(typeof(price))
console.log(typeof(isAvailable))

// Operator
console.log(title+price) // String meets Number
console.log(visitorCount+price) // Number meets Number
console.log(price===23.50) // Expected to be False
console.log(price===23.45) // Expected to be True