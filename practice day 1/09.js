//Write a function that takes two arrays as input and merges them into a single array.

let merge = (ar1,ar2)=>{
  let merge = [...ar1,...ar2];
  return merge;
}

console.log(merge([1,2,3,4],[5,6,7,8,9]));