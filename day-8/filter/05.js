let num = [10,20,50,200,21 ,25];

let multiple = (ar,num)=>{
  return ar.filter((el)=>{
    return (el%num===0);
  })
}
console.log(multiple(num,5));