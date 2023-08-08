const arr=[2,4,5,6]
const output=arr.map(double);
function double(x){
    return x*2;
}
console.log(output)


const ar=[4,5,6,7,8]
function isOdd(x){

    return  x % 2
}
const out=ar.filter(isOdd)
console.log(out)
