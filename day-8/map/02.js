let name = ['rup','jyoti','chaya'];


let concate = (ar)=>{
  let str1 = "";
  let str = ar.map((el)=>{
    str1+= el;
  })
  return str1;
}


let concate2 = (ar)=>{
  let str = ar.map((el)=>{
    return el;
  }).join('')
  return str;
}

console.log(concate(name));
console.log(concate2(name));