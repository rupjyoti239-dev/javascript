// Given an array of numbers and a target number, check if the target number exists in the array.

let nums = [1,2,3,4,5,6,7,8,9,65,63,100];


const findTarget = (ar,target)=>{
   if(ar.includes(target)){
    return `${target} is present`;
   }else{
    return `${target} not found`;
   }
}
console.log(findTarget(nums,10000));