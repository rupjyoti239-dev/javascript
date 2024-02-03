// Write a JavaScript function to count the number of vowels in a String argument.

const countVowel = function(str){
  let count = 0;
  let newStr = str.toLowerCase();
  for(let i=0;i<str.length;i++){
    if(newStr[i]=== 'a' || newStr[i] === 'e' || newStr[i]==='i' || newStr[i]==='o' || newStr[i] === 'u'){
        count++;
    }
  }
  return count;
}

console.log(countVowel("RUPJYOTI"));
console.log(countVowel("chaya"));
