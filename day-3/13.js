// Write a JavaScript program to test whether the character at the given(character) index is lower case


let msg = "hello woRld";
let char = msg.charAt(8);
if(char === char.toLowerCase()){
  console.log(`${char} is lower case`);
}else{
  console.log(`${char} is not lower case`);
}