let names = ['rupjyoti','samar','jyoti','chaya',"amarjit"];


const longerName = (ar)=>{
  let long = ar.filter((el)=>{
    return (el.length>5);
  })
  return long;
}

console.log(longerName(names));