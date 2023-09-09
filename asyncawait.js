let stocks={
    fruits:["Strawberry","apple","Blueberry","Avocado"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["choclate","Peanut"]
}
 let is_shop_open=true;
 function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            console.log("shop is closed")
        }
    })
 }

async function kitchen(){
    try{
       await  time(2000);
        console.log(`${stocks.fruits[3]} was selected`)

         await time(0000);
         console.log("start production")

         await time(2000)
         console.log("fruit was chopped")

         await time(1000)
         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

         await time(1000)
         console.log("start the machine")

         await time(2000)
         console.log(`${stocks.holder[0]} was selected to  fill icecream `)

         await time(3000)
         console.log(`${stocks.toppings[1]} selected as toppings`)

         console.log("ice cream served")

    }catch(error){
        console.log("customer left"),error
    }
    finally{
        console.log(" time over shop closed")
    }
}
kitchen()






































//  let toppings_choice=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("which topping would you love?")
//         },3000)
//     })
//  }
//  async function kitchen()
//  {
//     console.log("A")

//     console.log("b")

//     console.log("c")
// await toppings_choice()
//     console.log("d")

//     console.log("e")



//  }
//  kitchen()

//  console.log("cleaning the dishes")
//  console.log("cleaning the tables")
//  console.log("Taking other orders")