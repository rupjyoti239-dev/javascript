/**
 Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object
 */

const mergeObjects = (a,b)=>({...a, ...b});


let obj1 = {
  name: "rupjyoti",
  age: 23
}
let obj2 = {
  name: "jyoti",
  age: 20
}

console.log(mergeObjects({
  fname: "jyoti",
  _age: 20
}, {
  name: "rupjyoti",
  age: 23
}));