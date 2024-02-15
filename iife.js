(function (){
    var a=b=5
})()
console.log(b)

for(var i=0;i<3;i++)
{
    setTimeout(function(){
        console.log(i)
    },1000+i)
// }
// function sayHi()
// {
//     console.log(name)
//     console.log(age)
//     var name='Lydia'
//     let age=21
// }
// sayHi()


// let c={ greeting:"hey"}
// let d;
// d=c;
// d.greeting="hello"
// console.log(d.greeting);