let num = [1, 2, 3, 40, 5];

const findMax = (ar)=>{
  return ar.reduce((acc,el)=>{
    if(el>acc){
      return el;
    }else{
      return acc;
    }
  })
}

console.log(findMax(num));