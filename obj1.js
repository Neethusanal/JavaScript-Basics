let arr=[{ id: 1, value: 3 },
    { id: 2, value: 4},
    { id: 3, value:2 },
    { id: 4, value: 1 },]
    let sum=0
    for(i=0;i<arr.length;i++)
    {
        console.log(arr[i].value)
       
        sum= sum+arr[i].value
    }
    console.log(sum,"=sum")