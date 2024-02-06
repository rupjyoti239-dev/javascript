// Given an array of strings, create a new array where each string is capitalized.
let names = ["rupjyoti",'chaya','viki','farid'];

const capitalized = (ar)=>{
  let result = ar.map((el)=>{
    return el.toUpperCase();
  })
  return result;
}

console.log(capitalized(names));