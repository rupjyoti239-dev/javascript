let num = [10,11,15,86,198,58,98,59,9,654,46,9,46,46,98,51];

let findEven = (ar)=>{
  let newArray = [];
  ar.forEach((el)=>{
    if(el%2===0){
      newArray.push(el);
    }
  })
  return newArray;
}


console.log(findEven(num));