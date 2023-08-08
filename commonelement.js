function commonelement(){
    const arr1=[2,3,4,5]
    const arr2=[1,3,5]
    let result=[];
    for(let i=0;i<=arr1.length;i++)
    {
        for(let j=0;j<=arr2.length;j++)
        {
            if(arr1[i]==arr2[j])
            
            result.push(arr1[i])
        }
        
    }
    console.log(result)
}
commonelement()




// function commonelements()
// {
//     const arr1=[2,3,4,5]
//     const arr2=[1,3,5]
//     const arr3=[]
//     let k=0
//     for(i=0;i<arr1.length;i++)
//     {
//         for(j=0;j<arr2.length;j++)
//         {
//             if(arr1[i]==arr2[j])
//             {
                
//                 arr3[k]=arr1[i]
//                 k++
//             }
//         }
//     }
//     console.log(arr3)
// }


const arr1=[1,2,5,6,7]
const arr2=[1,9,4,7,3]
const duplicates= arr1.filter(value=>arr2.includes(value));
console.log(duplicates)