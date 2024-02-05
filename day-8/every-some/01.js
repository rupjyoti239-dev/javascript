let num = [2,4,6,5];

let isEven = (ar)=>{
  return ar.every((el)=>{
    return (el%2===0);
  });
}

console.log(isEven(num));



isOdd = (ar)=>{
  return ar.some((el)=>{
    return (el%2===0)
  })

}
console.log(isOdd(num));