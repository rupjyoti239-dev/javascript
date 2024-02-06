// Given an array of numbers, filter out all numbers less than 10.

let filter = (ar,num)=>{
  let result = ar.filter((el)=>{
    return (el>num);
  })
  return result;
}

console.log(filter([11,15,2,6,80,30,0,10],5));