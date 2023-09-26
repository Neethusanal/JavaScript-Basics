 function majority(nums) {
    let max=0
    let val
    for(i=0;i<nums.length;i++)
    {    let count=0
        for(j=0;j<nums.length;j++)
        {
            if(nums[i]==nums[j])
            {
                count++
              
            }  
        }
        if(count>0&&count>max)
        {
            max=count
            val=nums[i]
        }
       
    }
    console.log(val,max)
    
};
//   let nums = [2,2,1,1,1,2,2]
  let nums = [3,3,4]
majority(nums)