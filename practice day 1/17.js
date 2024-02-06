//Given an array of numbers with duplicates, create a new array with only unique numbers.

let num = [1, 2, 3, 4, 5, 6, 2, 3, 8, 1, 10];

const findDuplicate = (ar) => {
  let newAr = [];
  ar.forEach((el) => {
    if (!(newAr.includes(el))) {
      newAr.push(el)
    }
  })
  return newAr;
}
console.log(findDuplicate(num));


const findDuplicate2 = (ar)=>{
  return ar.filter((el,index,ar)=>{
    return ar.indexOf(el) === index;
  })
}
console.log(findDuplicate2(num));


