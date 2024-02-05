let num = [1, 2, 3, 4, 5];

const product = (ar)=>{
  return ar.reduce((acc,el)=>{
      return acc *=el;
  })
}

console.log(product(num));