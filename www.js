function largest(arr)
{
    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr.length-1;j++)
        {
            if(arr[j].length<arr[j+1].length)
            {
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log(arr)
}
const arr=["I","am","so","grateful","for","happy"]
largest(arr)
console.log(arr[1])