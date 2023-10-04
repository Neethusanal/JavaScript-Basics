// Higher-order function that takes a function 'callback' as an argument
function operateOnNumbers(a, b, callback) {
    return callback(a, b);
}

// Callback function for addition
function add(x, y) {
    return x + y;
}

// Callback function for multiplication
function multiply(x, y) {
    return x * y;
}

// Using the higher-order function with different callbacks
const result1 = operateOnNumbers(5, 3, add); // Pass 'add' as the callback
console.log(result1); // Output: 8

const result2 = operateOnNumbers(5, 3, multiply); // Pass 'multiply' as the callback
console.log(result2); // Output: 15