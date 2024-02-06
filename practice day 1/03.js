//Write a function that takes a string as input and returns the string reversed.

let reverse = (str)=>{
  let result = str.split("").reverse().join("");
  return result;
}
console.log(reverse('Rupjyoti'));