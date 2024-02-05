let num = [2,3,4,5,6];

let double = (ar)=>{
  let double = [];
  ar.forEach((el)=>{
      double.push(el*2);
  });
  return double;
}

console.log(double(num));