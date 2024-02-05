let item = [
  {
    name: "item1",
    quantity: 5,
    price: 10
  },
  {
    name: "item2",
    quantity: 10,
    price: 15
  },
  {
    name: "item3",
    quantity: 5,
    price: 100
  },
  {
    name: "item4",
    quantity: 500,
    price: 5
  }
]


let total =(ar)=>{
  ar.forEach((el)=>{
    el.total = el.price*el.quantity;
  })
  return ar;
}

console.log(total(item));