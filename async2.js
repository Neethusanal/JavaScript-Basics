const p=new Promise((resolve,reject)=>
setTimeout(()=>{
   resolve("promise resolved successfully")
},10000)
)                
               //Normal promise handling
// function getData(){
//     p.then((res)=>{
//         console.log(res)
//     })
//     console.log("Namaste js")
// }
// getData()

    //Using asyync await

async function getData()
{
    const data=await p
    console.log("Namaste js")
    console.log(data)
}
getData()
console.log("hhhhhhh");



//when calling 2 promises

// async function getData()
// {
//     const data=await p
//     console.log("Namaste js1")
//     console.log(data)



//     const val=await p

//         console.log("Namaste js2")
//     console.log("data2",val)

//     }



// getData()