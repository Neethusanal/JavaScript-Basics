function findSmallest(arr) {
    return arr.reduce((smallest, current) => {
      return current < smallest ? current : smallest;
    }, arr[0]);
  }
  
  // Example usage
  let arr = [3, 5, 1, 7, 2];
  console.log(findSmallest(arr)); // Output: 1