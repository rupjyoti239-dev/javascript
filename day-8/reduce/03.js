let cart = [
  {
    name: "item1",
    price: 200
  },
  {
    name: "item2",
    price: 300
  },
  {
    name: "item3",
    price: 500
  },
  {
    name: "item4",
    price: 500
  }
];

const total = (ar)=>{
  return ar.reduce((acc,el)=>{
    return acc +=el.price;
  },40)
}

console.log(total(cart));