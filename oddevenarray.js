function oddeven(){
    const arr=[2,4,7,9,13,44]
    const result=arr.map((item)=>{
         if(item%2==0)
        {
            return "0"
        }
        else
        {
            return "1"
        }
        
    })
    console.log(result)

}
oddeven()