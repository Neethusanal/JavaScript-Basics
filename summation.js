function summation(){
    const a=[1,2,3,4,5,]
   
    
 let sum=a.reduce((sum,current)=>{
  return sum+=current
    })
   console.log(sum)
}
summation()