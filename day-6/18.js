/**
 *  Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh” ans = “abcdefgh”
 */

const findUnique = function(str){
  let newStr = "";
  for(let i=0;i<str.length;i++){
    if(!(newStr.includes(str[i]))){
    newStr += str[i];
    }
  }
  return newStr;
}


console.log(findUnique("rupjyotiiirupjyotii"));