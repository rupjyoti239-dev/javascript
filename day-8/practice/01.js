// . Square and sum the array elements using the arrow function and then find the average of the array
let fun = (ar)=>{
  let sum = 0;
   for(let i=0;i<ar.length;i++){
    sum += ar[i]*ar[i];
   }
   let avg = sum/ar.length;
   return avg;
}

console.log(fun([2,2]));
