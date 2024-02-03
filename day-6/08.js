// create an function that returns the concatination of all strings in an array


function concate(array){
  let result = array.join("");
  return result;
}

function concate2(ar){
  let result = "";
  for(let i=0;i<ar.length;i++){
    result += ar[i];
  }
  return result;
}

console.log(concate(["so", "do", "go","move"]));
console.log(concate2(["so", "do", "go","moveee"]));