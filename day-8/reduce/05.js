let num = [1,2,46,8,-200];

let findMin = (ar)=>{
  return ar.reduce((acc,el)=>{
    if(acc<el){
      return acc;
    }else{
      return el;
    }
  })
}

console.log(findMin(num));