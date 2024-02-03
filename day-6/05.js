// create a function to create multiplication table of any given number

function table(n){
  for(let i=1;i<=10;i++){
    console.log(`${n} x ${i} = ${n*i}`);
  }
}

table(5);