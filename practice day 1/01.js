// write a function to print all elements of an array

let nums = [1,2,3,4,5,6,7,8,9,10];

let usingForeach = (ar)=>{
  ar.forEach((el)=>{
    console.log(el);
  })
}
usingForeach(nums);

console.log("\n");


let usingMap = (ar)=>{
  let result = ar.map((el)=>{
    return el;
  })
  return result;
}
console.log(usingMap(nums));



