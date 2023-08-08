// function one(call_back){
// console.log("step1")
// call_back()
// }
// function two(){
//     console.log("step2")
// }

// one(two)

// let array=[12,33,55,77]


// function getData(arr){
//  console.log(arr,"yyyy")
// }


// function insertData(arr,call_data)
// {
//     console.log(arr);
//     arr.push(100);
//     console.log(arr);
//     call_data(arr)
// }
// insertData(array, getData)


let stocks={
    fruits:["Strawberry","apple","Blueberry","Avocado"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["choclate","Peanut"]
}

// function order(fruit_name,call_production){
//     setTimeout(()=>{
//         console.log(`${stocks.fruits[fruit_name]} was selected`)
//         call_production()
//     },2000)
   
// }
// const production=()=>{
//     setTimeout(()=>{
//         console.log("started production")
//             setTimeout(()=>{
//                 console.log("Fruit has been chopped")

//                     setTimeout(()=>{
//                             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

//                             setTimeout(()=>{
//                                 console.log("Machine was started")
//                                 setTimeout(()=>{
//                                         console.log(`${stocks.holder[0]} has been selected`)
//                                         setTimeout(()=>{
//                                             console.log(`${stocks.toppings[1]} as toppings` )
//                                             setTimeout(()=>{
//                                                 console.log("serve icecream")
//                                             },2000)
//                                         },3000)
//                                 },2000)

//                             },1000)
//                     },1000)
//             },2000)
//     },000)
    
    
// }
// order(2,production)

let is_shop_open=true;
let order=(time,work)=>{
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
            
        }
        else{
            reject(console.log("our shop is cl osed"))
        }
    })
};

order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))

.then(()=>{
    return order(0000,()=>console.log("production has started"))
})
.then(()=>{
    return order(2000,()=>console.log("The fruit was chopped"))
})
.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[0]}and ${stocks.liquid[1]} was selected`)
    })
})
.then(()=>{
    return order(1000,()=>console.log("start the machine"))
})
.then(()=>{
    return order(2000,()=>{
        console.log(`ice cream placed on${stocks.holder[0]}`)
    })
})
.then(()=>{
    return order(3000,()=>{
        console.log(`${stocks.toppings[0]} was selected`)
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log("icecream was served")
    })
}).catch(()=>{
    console.log("customer left")
})
.finally(()=>{
    console.log("day ended our shop is closed")
})