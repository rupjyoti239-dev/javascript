let num = [10,15,20,54,2];

let findSquare = (ar)=>{
  let square = [];
  ar.forEach((el)=>{
    square.push(Math.pow(el,2));
  })
  return square
}

console.log(findSquare(num));