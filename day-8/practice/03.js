/**
 * Create a new array whose elements are in uppercase of words present in the
original array
 */

let name = ['rupjyoti','viki','farid'];

let uppercase = (ar)=>{
  let result = ar.map((el)=>{
    return el.toUpperCase();
  })
  return result;
}

console.log(uppercase(name));