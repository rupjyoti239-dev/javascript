let num = [10,50,40,51,60,90];

let findMax = (ar)=>{
  let max = 0;
  ar.forEach((el)=>{
    if(el>max){
      max = el;
    }
  });
  return max;
}

console.log(findMax(num));