/**
 Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25
 */


let num = 1234;
let sum = 0;
let copy = num;

while (copy > 0) {
  rem = copy % 10;
  sum = sum + rem;
  copy = Math.floor(copy / 10)
}
console.log(sum);

let remain = 0;
let result = 0;
while (num > 0) {
  remain = num % 10;
  result = result + remain;
  num = Math.floor(num / 10)
}

console.log(result);

