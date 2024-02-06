//Write a function that takes a number as input and returns true if it's a prime number, otherwise false.
let isPrime = (num)=>{
  let flag = 0;
  for(let i=2;i<num;i++){
    if(num%i===0){
      flag = 1;
    }
  }
  if(flag===0){
    console.log("prime");
  }else{
    console.log("not prime");
  }
}

isPrime(10)