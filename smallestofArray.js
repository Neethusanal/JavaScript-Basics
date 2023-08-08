// function findSmallest(arr) {
//     let smallest = arr[0]; // Initialize smallest with the first element of the array
//     for(let i = 1; i < arr.length; i++) {
//       if(arr[i] < smallest) { // If the current element is smaller than the smallest element so far
//         smallest = arr[i]; // Update smallest with the current element
//       }
//     }
//     return smallest; // Return the smallest element
//   }
  
//   // Example usage
//   let arr = [3, 5, 1, 7, 2];
//   console.log(findSmallest(arr)); // Output: 1


function largest(arr)
{
    let largest=arr[0]
    for(let i=0;i<=arr.length;i++)
    {
        if(arr[i]>largest)
        {
            largest=arr[i]
        }
        
    }
    console.log(largest)
}

const array=[50,20,80,30,20]
largest(array)
  