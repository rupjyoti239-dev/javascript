// write a program to check if two number have same last digit . E.g 32 and 44562 have same last digit 2


let num1 = 32;
let num2 = 1024;
let rem1 = num1%10;
let rem2 = num2%10;

if(rem1 === rem2){
  console.log(`last digits are same`);
}else{
  console.log(`last digits are not same`);
}