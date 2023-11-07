function isvalid(string)
{
//    ;
//     const splitNumbers = [];
    
//     for (let i = 0; i < string.length - 1; i += 2) {
//       const pair = string.slice(i, i + 2);
//       splitNumbers.push(Number(pair));
//     }
    
//     console.log(splitNumbers);

let first=Number(string[0]+string[1])
console.log(first)
let i=2
while(i<string.length)
{
    let next=Number(string[i]+string[i+1])
    console.log(next)
    if(first+1==next)
    {
        i=i+2;
        first=next
        
    }
    else{
        return false
}return true

    
    
}
}
console.log(isvalid('555457585960'))