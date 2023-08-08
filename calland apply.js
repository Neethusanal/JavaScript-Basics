const student1={
    name:"Neethu",
getName(age,location)
    {
        console.log(`${this.name} ${age}, ${location}`)
    }
}

const student2={
    name:"Abilash"
}

student1.getName.call(student2,10,"Mookkuthala")
student1.getName.apply(student2,[30,"Thrissur"])

console.log(student1.getName.bind(student2,10,"Mookkuthala"))
const value=student1.getName.bind(student2,15,"Calicut")
value();