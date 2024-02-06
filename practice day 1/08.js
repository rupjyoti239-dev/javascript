// Write a function that takes a number as input and returns its factorial.

let factorial = (num)=>{
  let product = 1;
  for(let i=1;i<=num;i++){
    product *=i;
  }
  return product;
}

console.log(factorial(10));