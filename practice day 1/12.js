//Given an array of numbers, find the sum of all the numbers.
let nums = [1,2,3,4,5,6,7,8,9,10];

let sum = (ar)=>{
  let sum = 0;
  ar.map((el)=>{
      return sum +=el;
  })
  return sum;
}
console.log(sum(nums));


let add = (ar)=>{
  return ar.reduce((sum,el)=>{
     return sum +=el;
  })
}
console.log(add(nums));