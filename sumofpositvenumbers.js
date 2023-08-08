function sumofarray(){
    const arr=[2,-4,6,8,-9,22]
    let sum=0;
    for(i=0;i<arr.length;i++)
    {   if(arr[i]>0){
        sum+=arr[i]
    }
   
       
    }
     console.log(sum)
}
sumofarray()