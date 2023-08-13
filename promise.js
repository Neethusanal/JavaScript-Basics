// const p= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//  resolve(1)
// //reject(1)

//     },2000)
// }).then((data)=>{
//     console.log(data,"resolve")
// }).catch((err)=>{
//     console.log(err,"reject")
// })



const p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
 resolve(1)
//reject(1)

    },2000)
}).then((data)=>{
    console.log(data,"resolve")
    return data
}).then((data)=>{
    console.log(data,"then2")
}).catch((err)=>{
    console.log(err,"reject")
}).finally(()=>{
    console.log("finally")
})