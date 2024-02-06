//Write a function that takes a string as input and returns the number of vowels in the string.

const countVowel = (str)=>{
  let count = 0;
  str = str.toLowerCase();
  for(let i=0;i<str.length;i++){
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      count++;
    }
  }
  return count++;
}

console.log(countVowel("aeiou"));



console.log("\n");

const findVowel = (str)=>{
  let count = 0;
  str = str.toLowerCase();
  for(let el of str){
    if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') {
      count++;
    }
  }
  return count;
}

console.log(findVowel("AEIOU"));
