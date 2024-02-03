//Write a JavaScript function to generate a random number within a range (start, end)

const generateRandom = function(start,end){
  let num = Math.floor(Math.random()*(end-start))+start;
  return num;
}


console.log(generateRandom(20,25));