let nums = [1,2,3,4,5,6,7,8,9,10];


let sum = (ar)=>{
 let sum = 0;
  ar.forEach(element => {
    sum += element;
  });
  return sum;
}

console.log(sum(nums));

