let name = ['rup','jyoti','chaya','viki'];

let upperCase = (ar)=>{
  let arr = ar.map((el)=>{
    return el.toUpperCase();
  })
  return arr;
}
console.log(upperCase(name));