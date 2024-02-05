let data = {
  name: "rupjyoti",
  age: 24
};

let dataCopy = {
  ...data, id: 123
}
console.log(dataCopy);


let ar = [1,2,3,4,5,6];
let obj = {...ar};
console.log(obj);