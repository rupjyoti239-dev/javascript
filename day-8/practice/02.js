// Create a new array using the map function whose each element is equal to the original element plus 5

let num = [1,2,3,4,5];

let add5 = (ar)=>{
  let result = ar.map((el)=>{
    return el+5;
  })

  return result;
}

console.log(add5(num));