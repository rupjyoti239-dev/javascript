//  write an arrow function named arrayAverage that accepts an array of numbers and return the average of those numbers


let arrayAverage = (ar)=>{
  let sum = 0;
  for(let i=0;i<ar.length;i++){
      sum += ar[i];
  }
  let average = sum/ar.length;
  return average;
}

console.log(arrayAverage([5,4,3,2,1,5,1]));