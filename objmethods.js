const obj={
    name:'jhon',
    subject:[
        {
            english:100
        },
        {
            maths:60
        },
        {
            arabic:50
        }
    ]
}
// let sum=0;
// obj.subject.forEach(Element => {
//   sum += Object.values(Element)[0]
// });
// console.log(sum);

let sum=obj.subject.reduce((Element,values)=>{
    const val=Object.values(values)[0]
    return Element+val;
},0)
console.log(sum);