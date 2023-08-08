// function a(){
//     for(let i=0;i<3;i++)
//     {
//         setTimeout(()=>{
//             console.log(i)
//         },1)
//     }
//     }
//     a()


    // function a(){
    //     for(var i=0;i<3;i++)
    //     {
    //         setTimeout(()=>{
    //             console.log(i)
    //         },1)
    //     }
    //     }
    //     a()


    // console.log(typeof(+true))
    // console.log(typeof(true))



    // let data="size";
    // const bird={
    //     size:"small",
    // };
    // console.log(bird[data])
    // console.log(bird["size"])
    // console.log(bird.size)
    // console.log(bird.data)


    // let c={name:"peter"};
    // let d;
    // d=c;
    // c.name="anil"
    // console.log(d.name);


    // var x;
    // var x=10;
    // console.log(x)

    // var x;
    // let x=10;
    // console.log(x)


    // let a=3;
    // let b=new Number(3)
    // console.log(a==b)
    // console.log(a===b)


    // let name
    // nmae={}
    // console.log(name)


    // function fruit(){
    //     console.log("woof")
    // }
    // fruit.name="apple";

    // console.log(fruit())

    // function sum(a,b){
    //     return a+b;
    // }

    // console.log(sum(1,"2"))


    // let number=0;
    // console.log(number++)
    // console.log(++number)
    // console.log(number)


    // function getAge(...args){
    //     console.log(typeof args)
    // }
    // getAge(21)

    // function getAge(){
    //     "use strict"
    //     age=21
    //     console.log(age)
    // }
    // getAge()

    // const sum=eval('10*10+5')
    // console.log(sum)

//     const obj={
//         1:"a",
//         2:"b",
//         3:"c"
//     }
//    console.log( obj.hasOwnProperty("1"))
//   console.log(  obj.hasOwnProperty(1))


// const obj={
//     a:"one",
//     b:"two",
//     a:"repeat"
// }
// console.log(obj)

// function a()
// {
//     for(i=1;i<5;i++)
//     {
//         if(i==3)
//         continue;
//         console.log(i)
//     }
// }
// a()

// const foo=()=> console.log("first")
// const bar=()=>  setTimeout(()=>{
//     console.log("second")
// })                                                           
// const baz=()=>console.log("Third")
// bar()
// foo()
// baz()

// const person={
//     name:"lydia"
// }
// function sayHi(age){
//     return `${this.name} is ${age}`      //call and bind
// }

// console.log(sayHi.call(person,21))
// console.log(sayHi.bind(person,21))


// function sayHi()
// {
//  return(()=>"hello")()
// }
// console.log(typeof(sayHi()))

// function sayHi()
// {
//  return()=>0
// }
// console.log(typeof(sayHi()))


// console.log(typeof typeof 1)



// const numbers=[1,2,3]
// numbers[9]=11;
// console.log(numbers)



// const numbers=[1,2,3]
// numbers[3]=numbers;                                //will print an infinite array
// console.log(numbers)




// console.log(!!null)
// console.log(!!"")
// console.log(!!1)



// console.log(setInterval(()=> console.log("hi"),1000))
// console.log(setInterval(()=> console.log("hi"),1000))

// console.log(setInterval(()=> console.log("hi"),1000))



// console.log([..."anil"])
// console.log([...[3,4,5,6]])




// let data=3+4+'5'
// console.log(data)
// console.log(typeof data)
// console.log(typeof 3+4+'5')
// console.log(typeof (3+4+'5'))
// console.log(typeof (3+4+ +'5'))



// let data=[1,2,3].map((num)=>{

//     if(typeof num==='number') return;
//      return num*2

// })
// console.log(data)

 


// function getInfo(member)

// {
//     member.name="Anil"
// }
// const person={name:"sarah"}

// getInfo(person)

// console.log(person)




// function car()
// {
//     this.make="tata";
//     return { make:"kia"}
// }
// const mycar=new car()
// console.log(mycar.make)



// (()=>{
//     let x=(y=10)
   
// })()
// console.log(typeof x)

// (()=>{
//     let x=(y=10)
// })()
// console.log(typeof y)



// let x=100;
// (()=>{
//     var x=20
// })()
// console.log(x)


// console.log(!true-true)
// console.log(true+ + "10")


// const property="first name"
// const name="Siyaan"

// const obj={
//     [property]:name
// }
// console.log(obj)



// const user={
//     name:"Neethu",
//     course:"Mern",
//     place:"Thrissur"
// }

// for (key in user)
// {
//     console.log(user[key])
// }



// const a={b:{c:2}}
// const b={...a}
// a.b.c=3
// console.log(b.b.c)


// const nums={
//     a:100,
//     b:200,
//     title:"mu nums"
// }

// multiplybytwo(nums)

// function multiplybytwo(nums)
// {
//     for(key in nums)
//     {
//         if(typeof  nums[key]==='number')
//         {
//             nums[key]=nums[key]*2
//         }
//     }
//     console.log(nums)
// }





// const sub={

//     maths:100,
//     english:80,
//     malayalam:98,
//     Hindi:100
// }

// sumofsubjects(sub)

// function sumofsubjects(sub)
// {   let sum=0;
//     for(key in sub)
//     {
//        sum+= sub[key]
//     }
//     console.log("sum is"+sum)
// }

// const a={}
// const b={key:"b"}
// const c={key:"c"}
// a[b]=123
// a[c]=456
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(a[b])
// console.log(a[c])

// const user={name:"lydia",age:21}
// const admin={admin:true,...user}
// console.log(admin)



// const settings={
//     username:"siyaan",
//     level:19,
//     health:90
// }

// const data=JSON.stringify(settings,["level","health"])
// console.log(data)



// const shape={
//     radius:10,
//     diameter()
//     {
//         return this.radius*2;  //here this refere to object
//     },
//     perimeter:()=>2*Math.pi*this.radius //here this refers to window object
// }
// console.log(shape.diameter())
// console.log(shape.perimeter())


