#!/usr/bin/env node

// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).

var arr2 = process.argv.slice(2,process.argv.length+1); // pnc do slice

var sum = 0;

console.log(arr2.reduce(function (sum,currentElement,index,arr2){
  return +sum + +currentElement; // ugly parseInt. Bleh!
}));

// Official solution seem prettier:
// var result = 0
// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])
// console.log(result)

