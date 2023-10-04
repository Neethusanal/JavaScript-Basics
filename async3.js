const p1=new Promise((resolve,reject)=>
setTimeout(()=>{
   resolve("promise resolved successfully")
},10000)
)   
const p2=new Promise((resolve,reject)=>
setTimeout(()=>{
   resolve("promise resolved successfully")
},5000)
)   

async function getData()
{
    const data= p1
    console.log("Namaste js1")
    console.log(data)



    const val=  await p2

        console.log("Namaste js2")
    console.log("data2",val)

    }

    getData()