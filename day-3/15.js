// Write a JavaScript program to check if an element exists in an array or not 
let ar = ['java','c','c++','python','ruby','react'];
let item = 'java';
if(ar.includes(item)){
  console.log(`${item} is exists in the array`);
}else{
  console.log(`${item} is not exist`);
}