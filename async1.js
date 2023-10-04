//             //  sync function always returns a promise

// async function getData(){
//   return "Namaste"
// }
// const dataPromise=getData()  //Promise { 'p' } 
// console.log(dataPromise)
//              //To get the result 

// dataPromise.then((res)=>
// console.log(res)
// )

//************************************************************************************************************* */
const p =new Promise((resolved,reject)=>{
    resolved("promise resolved successfully")
})

 function getData(){
    return p
  }
  const dataPromise=getData()
  console.log(dataPromise)
               //To get the result 
p.then((res)=>
  console.log(res)
  )