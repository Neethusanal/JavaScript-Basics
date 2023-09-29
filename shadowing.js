// let x = 10; // Outer variable

// function shadowExample() {
//   let x = 20; // Inner variable, shadows the outer 'x'
//   console.log(x); // Outputs 20 (referring to the inner 'x')
// }

// shadowExample();
// console.log(x); // Outputs 10 (referring to the outer 'x')



//In case of var
var x = 10; // Outer variable

function shadowExample() {

    var x = 20; // Modifies the outer 'x', doesn't create a new one
    console.log(x); // Outputs 20 (referring to the outer 'x')

  console.log(x); // Outputs 20 (still referring to the outer 'x')
}


shadowExample();

console.log(x,"outer"); // Outputs 20 (referring to the outer 'x')
