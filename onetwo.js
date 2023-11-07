const originalArray = [7, 2, -3, 4, -7, -9];
const rearrangedArray = [];

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 === 0) {
    rearrangedArray.push(originalArray[i]);
  } else {
    rearrangedArray.unshift(originalArray[i]);
  }
}

console.log(rearrangedArray);
