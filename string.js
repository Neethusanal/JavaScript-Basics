const text = "Hello, my name is John. John is my first name.";
const pattern = /John/g; // Regular expression to match occurrences of "John"

const matches = text.match(pattern);

console.log(matches);
// Output: ["John", "John"]

let a ="apple  banana kiwi"
let result=a.slice(7,13)
console.log(result,"res:")
let output=a.substring(-7,-12)
console.log(output,"out")
let sub=a.substr(7,4)
console.log(sub)
let data = "5";
let b=data.padStart(3,7)
console.log(b)
let val = "The rain in spain stays mainly in the plain";
let mm=val.match("ain");
console.log(mm,"match")