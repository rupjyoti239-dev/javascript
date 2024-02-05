let num = [1,2,3,2,5,6,4,3,8,6];

const unique = (ar)=>{
  let unique = ar.filter((el,index,ar)=>{
    return ar.indexOf(el)===index;
  })
  return unique;
}

console.log(unique(num));