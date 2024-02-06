//Given an array of objects representing people (each object has a name and an age property), find the first person who is older than 30.

let peoples  = [
  {
    name: "jack",
    age: 35
  },
  {
    name: "john",
    age:25,
  },
  {
    name: "jim",
    age: 31
  },
  {
    name: "ruhi",
    age:25
  }
]

const findOlder = (ar)=>{
  let result = ar.filter((el)=>{
    return (el.age>30)
  })
  return result;
}
console.log(findOlder(peoples));