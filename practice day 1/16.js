// Given an array of numbers, create a new array where each number is doubled.

 let nums = [1,2,3,4,5,6,7,8,9]

 let doubled = (ar)=>{
  return ar.map((el)=>{
    return el*2;
  })
 }
 console.log(doubled(nums));