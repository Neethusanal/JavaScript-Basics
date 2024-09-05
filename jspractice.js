// let x=10
// {
//     console.log(x)  //here it comes Reference error:Cannot access 'x' before initialization because of temporal dead zone
//     let x=20;
//     console.log(x)
// }
//**************************************************************************************************** */
console.log(x)//due to hoisting behaviour of var
{
    var x=10
    {
        let x=10
    }
    console.log(x)


}

// ******************************************************************************************************
// if([])
//     {
//         console.log("hello") //the reason it prints "hello" is that an empty array ([]) is not a falsy value in JavaScript. In fact, it's a truthy value.
//     }
//     else
//     {
//         console.log("bye")
//     }
// *********************************************************************

 console.log(NaN!=NaN)
 
 console.log(1!==true)
 console.log(1!=true)

 //**************************************************************************** */

 greet("john")

 var greet= (name)=>{
    console.log("good day", name)
 }

 function greet (name)
{
    console.log("Hello ", name)
}
greet("john")