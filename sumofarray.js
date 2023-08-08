function sumofarray(arr1,arr2)
{
    let result=[]
    if(arr1.length==arr2.length)
    {
        for(let i=0;i<arr1.length;i++){
        result.push(arr1[i]+arr2[i])
        }
    }
    console.log(result)
}
const ar1=[2,3,4]
const ar2=[1,4,3]
sumofarray(ar1,ar2)