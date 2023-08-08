function average(){
    const arr=[10,20,30,40,50]
   let sum= arr.reduce((sum,curr)=>{
     return   (sum+curr)
   })
  console.log(sum) 
  let avg=sum/arr.length
  console.log(avg)
}
average()




// function average()

// {
//     const arr=[2,5,6,7,8]
//     let sum=0;
//     let count=arr.length
//     console.log(count)
//     for(let i=0;i<count;i++)
//     {
//         sum=sum+arr[i]
//     }
//     console.log(sum)
//     let avg=sum/count
//     console.log(Math.floor(avg))
    
// }

// average()