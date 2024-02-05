let obj = [
  {
    name: "rupjyoti",
    age: 24
  },
  {
    name: "viki",
    age: 20
  },
  {
    name: "farid",
    age: 25
  }
]

let printName = (ar)=>{
  ar.forEach(element => {
    console.log(element.name);
  });
}

printName(obj);