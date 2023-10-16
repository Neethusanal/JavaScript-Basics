const arr=["dog","guards","our","home"]
secondlargeststring(arr)
function secondlargeststring(arr){

    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr.length-1;j++)
        {

            if((arr[j].length)>(arr[j+1].length))
            {
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
       
    }
    console.log(arr)
    console.log(arr[arr.length-2])
    

  
}

