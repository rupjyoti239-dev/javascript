let num  = [1,2,3,4,5];

const sum = (ar)=>{
  return ar.reduce((accu,el)=>{
      return accu +=el
  },0)
}

console.log(sum(num));