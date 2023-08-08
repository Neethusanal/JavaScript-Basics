// 
// let a=[4,5,6,7,8]
// console.log(typeof(a));
// console.log("Hello World")
// // alert("hello World")
// let b=prompt("enter the first number")
// let c=prompt("enter the second number")
// console.log("b+c=",parseInt(b)+parseInt(c)) 
// var b=prompt("Enter a number")
// var c=(Math.sqrt(b))
// console.log(c)
// var a=prompt("enter the base value")
// var b = prompt("enter the height")
// var area= parseInt((a*b))/2;
// console.log(area)
function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    
    // then execute the callback function that was passed
    callback();
  }
  
  var arr = [1, 2, 3, 4, 5];
  
  modifyArray(arr, function() {

    console.log("array has been modified", arr);
  });