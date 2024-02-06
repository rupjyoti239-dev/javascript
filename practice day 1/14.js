//Given an array of strings, sort them in alphabetical order.
let fruits = ['mango','banana','apple','orange'];
const sort = (ar)=>{
  return ar.sort();
}
console.log(sort(fruits));




const sortNum = (ar)=>{
  return ar.sort((a,b)=>{
    return a-b;
  })
}

console.log(sortNum([5,100,2,300,800,9,1000]));