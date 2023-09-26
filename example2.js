function sum (arr)
{
    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr.length;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log(arr)
    let result=0
    for(i=0;i<arr.length;i++)
    {
        if(i!=1&&i!=arr.length-2)
        {
            result=result+arr[i]
        }
    }
    console.log(result)
}
const arr=[3,7,9,2,1]

 sum(arr)