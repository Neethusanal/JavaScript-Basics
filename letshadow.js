// let  a = 10; // variable declared in global scope
// {
//    let a = 100; // variable declared inside a block
// }
// console.log(a);



//To understand illegal shadowing we will use var and let keywords in our example. So, let's try to understand illegal shadowing.
    



// let a = 10; // variable declared in global scope using `let` keyword
//     {
//       var a = 100; // variable declared inside a block using `var` keyword
//     }
//    console.log(a);
   //Now, here we will get an error Uncaught SyntaxError: Identifier 'a' has already been declared. Although here both the variables are pointing to the global memory space, the variable a inside the block fails to shadow the variable a from the global space. This is said to be illegal shadowing.


  // Example 1: Swapping variables let and var in the above example
// var a = 10; // variable declared in global scope using `var` keyword
//     {
//       let a = 100;
//       console.log(a) // variable declared inside a block using `let` keyword
//     }
//   console.log(a);
  //Here, we will get 10 in the console and not an error, but why? Because, both the variables are pointing to separate memory spaces. Although, the variable inside the block will not shadow the variable in the global space,
  // because let has its own separate memory space.



  //Example 2: Writing variable var inside a function in the above example
    let a = 10; // variable declared in global scope using `let` keyword
    func();
    function func(){
      var a = 100; // variable declared inside a block using `var` keyword
    }
   console.log(a);
//Here, we will also get 10 in the console because variable a inside the function and variable a outside the function is pointing to the different memory locations and here also var a inside the function will not shadow the variable declared with let keyword.

