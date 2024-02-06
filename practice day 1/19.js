// Given an array of numbers, find the maximum or minimum number in the array.
let num = [1,2,3,4,5,6,7,8,90,500];
let findMin = (ar)=>{
  return ar.reduce((min,el)=>{
    if(min>el){
      return min;
    }else{
      return min;
    }
  })
}

console.log(findMin(num));