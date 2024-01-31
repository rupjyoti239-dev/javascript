/**
 Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3]
 */

let numbers = [1,3,2,4,56,2,50,80];
let num = 2;

for(let i=0;i<numbers.length;i++){
  if(numbers[i] === num ){
    numbers.splice(i,1)
  }
}
console.log(numbers);
