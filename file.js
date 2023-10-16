// const fs = require('fs');

// fs.writeFile('example.txt', 'Hello, world!', function((err)=> {
//   if (err) throw err;
//   console.log('File created successfully!');
// });
const fs=require('fs')
fs.writeFile('ex1.txt',"hai Siyaan How are you?",function(err){
  if(err) throw err
  console.log('file ceated succesfully')
})