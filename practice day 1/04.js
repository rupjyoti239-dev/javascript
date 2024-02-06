//Write a function that takes a string as input and returns true if it's a palindrome (reads the same backward as forward), otherwise false.

let isPalindrome = (str)=>{
  let reverse = str.split("").reverse().join("");
  if(str === reverse){
    return "Palindrom string";
  }else{
    return "Not palindrom";
  }
}

console.log(isPalindrome("mpm"));
console.log(isPalindrome("mpn"));