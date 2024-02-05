/**
 Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled
 */

let doubleAndReturnArgs = (ar,...args)=>{
  let result = args.map((el)=>{
    return el*2;
  });
  let merge = [ar,...result];
  return merge;
}

console.log(doubleAndReturnArgs([1,2,3],2,3));