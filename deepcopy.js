var person={name:"Abishek",
            age:30,
            city:{
                place:"malappuram",
                state:"Kerala"
            }}

var p1= person
// console.log(p1,"p1")
// console.log(person,"person")

p1.age=20;
console.log(p1,"p1")
console.log(person,"person")
var p2= Object.assign({},person)
console.log(p2,"p2")
p2.city.place="Thrissur"
console.log(p2)
console.log(p1,"p1")
console.log(person,"person")
var p3=JSON.stringify(person)
p3=JSON.parse(p3)
console.log(p3,"p3")
p3.city.place="kannur"
console.log(p1,p2)
console.log(p3)
