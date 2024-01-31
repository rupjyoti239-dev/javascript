//Find the largest number in an array with only positive numbers
let ar = [10,50,80,100,200,-900];
let max = ar[0];
for(let i=0;i<ar.length;i++){
  if(ar[i]>max){
    let tem = ar[i];
    ar[i]=max;
    max = tem;
  }
}
console.log(max);


let num = [10,15,,80,-200,65];
let largest = 0;
for(let i=0;i<num.length;i++){
  if(num[i]>largest){
    largest = num[i]
  }
}
console.log(largest);