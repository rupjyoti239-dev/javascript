// A "good string" is a string that strats with the letter 'a' or 'A' and has a length > 5

let str = "approach";

if((str.startsWith('a') || str.startsWith('A')) && str.length>5){
  console.log('Golden string');
}else{
  console.log("Bad String");
}