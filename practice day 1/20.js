// Given an array of arrays, flatten it into a single array.
let array = [
  [1,2,3,4],
  [5,6,7,8,9],
  [10,11,12,13,14,15]
]

let flattenArray = (ar)=>{
  return [].concat(...ar)
}
console.log(flattenArray(array));