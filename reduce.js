const arr = [40,80,30];

// Define a callback function to compare two elements and return the larger one
const findLargest = (accumulator, currentValue) => {
  return (currentValue > accumulator) ? currentValue : accumulator;
};

// Use the reduce method to find the largest element in the array
const largest = arr.reduce(findLargest);

console.log(largest); // Output: 110
