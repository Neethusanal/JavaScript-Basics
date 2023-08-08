const arr = [1, 2, 3, 4, 2, 3, 5, 6, 1];
console.log(arr.indexOf(3))
const uniqueArr = arr.filter((value, index) => {
  return arr.indexOf(value) === index;

});

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5, 6]
