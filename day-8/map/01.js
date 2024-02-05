let num = [1,2,3,4,5,6];

let double = (ar)=>{
  let double = ar.map((el)=>{
    return (el*2);
  })
  return double;
}

console.log(double(num));

