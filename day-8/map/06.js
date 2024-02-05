
let words = ['go','eat','run'];


let addIng = (ar)=>{
  let x = ar.map((el)=>{
    return `${el}ing`;
  })
  return x;
}

console.log(addIng(words));
