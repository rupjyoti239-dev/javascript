// write an arrow function named isEven that takes a single number as argument and returns if it is even or not

let isEven = (n)=>{
  if(n%2===0){
    return "even";
  }else{
    return "odd";
  }
}

console.log(isEven(6));