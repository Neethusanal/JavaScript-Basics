function average(a, b) {
    return (a + b) / 2;
  }
  
  console.log(average(2, 1));


  console.log("1"+1-1)
  console.log(2+'2'*'2')
  console.log([1,2,3]+[ 4,5,6])
  console.log("2">"12")



  var num=8
  function display(){
    var num=10;
    console.log(num)
  }
  display();
  console.log(num)


  const array=['10','10','10'].map(parseInt)
  console.log(array)
//   First iteration: '10' at index 0

// parseInt('10', 0) converts '10' to an integer in base 10. Result: 10
// Second iteration: '10' at index 1

// parseInt('10', 1) attempts to convert '10' to an integer in base 1. However, base 1 is not valid, so parseInt returns NaN. Result: NaN
// Third iteration: '10' at index 2

// parseInt('10', 2) converts '10' to an integer in base 2. Result: 2
// Therefore, the resulting array is [10, NaN, 2]. To avoid this issue when using parseInt with map, it's recommended to use an anonymous function to explicitly specify the base:const array = ['10', '10', '10'].map(value => parseInt(value, 10));
// const array = ['10', '10', '10'].map(value => parseInt(value, 10));
// console.log(array);
