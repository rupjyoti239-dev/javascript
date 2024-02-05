let persons = [
  {
    name: "mohit",
    age: 20
  },
  {
    name: "samar",
    age: 15
  },
  {
    name: "karan",
    age: 13
  },
  {
    name: "Rupjyoti",
    age:24
  }
];


const child = (ar)=>{
  let child = ar.filter((el)=>{
    return (el.age<18);
  })
  return child;
}

console.log(child(persons));