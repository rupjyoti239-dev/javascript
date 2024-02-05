let num = [1,2,3,4,5,6,7,8,9,10];


const findEven = (ar)=>{
  let even = ar.filter((el)=>{
    return (el%2===0);
  })
  return even;
}

console.log(findEven(num));