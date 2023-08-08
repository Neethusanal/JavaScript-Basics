// function stringreverse(str)
// {
//     let newstr=""
//     for(let i=str.length-1;i>=0;i--)
//     {
//         newstr+=str[i]
//     }
// return newstr;
// }
//     let string="enter the string"
//     const result=stringreverse(string)
//     console.log(result)



// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// // take input from the user
// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);

function stringreverse(str)
{
    const arrayString=str.split(" ");
    console.log(arrayString)
    const reversestring=arrayString.reverse()
    console.log(reversestring)
    const joinArray=reversestring.join()
    console.log(joinArray)
   
    return joinArray
}

const string="hello world "
const result=stringreverse(string)
console.log("result is ",result)