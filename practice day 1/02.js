/**
 Write a function that takes an array of numbers as input and returns the largest number in the array.
 */

 let nums = [1,2,3,4,5,60,7,8,9,10]

 let findMax = (ar)=>{
  let max = 0;
   ar.map((el)=>{
    if(max<el){
      max=el;
    }
  })
  return max;
 }
 console.log(findMax(nums));


 let findLargest = (ar)=>{
   let result =  ar.reduce((max,el)=>{
      if(max<el){
       return el
      }else{
        return max;
      }

    })
    return result;
 }
 console.log(findLargest(nums));