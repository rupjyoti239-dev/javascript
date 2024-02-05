let persons = [
  {
    name: "Rupjyoti",
    age:24
  },
  {
    name: "viki",
    age: 24
  },
  {
    name: "farid",
    age: 24
  }
];
let name = (ar)=>{
  let name = ar.map((el)=>{
    return el.name
  })
  return name;
}

console.log(name(persons));