const person={
    name:"Nikhil",
    getName:function(){
        return this.name
    }
    
}
console.log(person.getName())


const  p1={
    name:"Aswini"
}
p1.getName= person.getName

p1.getName.bind(person)
console.log(p1.getName())
p1.getName.call(person)
console.log(p1.getName(),"call")
