function negativePositive(arr) {
    const positiveNumbers = [];
    const negativeNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        positiveNumbers.push(arr[i]);
      } else {
        negativeNumbers.push(arr[i]);
      }
    }
  
    // Concatenate the positive and negative arrays
    const resultArray = positiveNumbers.concat(negativeNumbers);
  
    return resultArray;
  }
  
  const arr = [5, 3, -2, 6, -3, -8];
  console.log(negativePositive(arr));
  