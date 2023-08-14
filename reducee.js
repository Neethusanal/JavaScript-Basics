const arr=[2,3,4,5,6,7,8]
const reducedarr=arr.reduce((prev,next)=>prev+next)
console.log(reducedarr)


const out=arr.reduce((prev,next)=>{
    if(prev<next)
    next=prev
return next
})
console.log(out)