// create a function that returns the sum of numbers sfrom 1 to n

function sum(n){
  let sum =0;
  for(let i=1;i<=n;i++){
      sum = sum+i;
  }
  return sum;
}

console.log(sum(10));