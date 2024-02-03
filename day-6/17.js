// Write a JavaScript function that returns array elements larger than a number

let array = [2,5,80,9,60,40,6,10,30,23];
let num = 10;

let largerElement = function(ar,num){
  let newArray = [];
  for(let i=0;i<ar.length;i++){
    if(ar[i]>num){
      newArray.push(ar[i]);
    }
  }
  return newArray;
}


console.log(largerElement([2, 5, 80, 9, 60, 40, 6, 10, 30, 23],5));
console.log(largerElement(array,num));