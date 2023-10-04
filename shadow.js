//shadowing with var 

var a = 10; // variable declared in global scope
{
    var a = 100; // variable declared inside a block
}
console.log(a);






// var a = 10; // variable declared in global scope
// func();
// function func(){
//     var a = 100; // variable declared inside a function
// }
// console.log(a);

//So, here output will be 10, Why? Because both the variables are stored in different memory spaces. 
//As keyword var is a function/local scoped i.e. variable declared inside the function can be accessed inside that function only, we will not be able to access it outside its boundary. And here, the variable a inside function fails to shadow the variable a in the global scope.