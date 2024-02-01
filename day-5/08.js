const max = parseInt(prompt('Enter the max number'))
let num = Math.floor(Math.random()*max);
console.log(num);

let guess = (prompt('Guess the number'));


let live = 5;
while(live>1){
  
  if(guess == num){
    alert(`congrates! the number is ${num}`)
    break;
  }
  
  
  if(guess == "quit"){
    confirm('are you sure?')
    break;
  }else if(num-guess>15){
    guess = prompt(`Enter a large number`);
  }else if(guess-num>15){
    guess = prompt(`Enter a small number`);
  }else{
    guess = prompt(`too close, try again `);
  }
  
  live--;
  
}
if(guess != num){
  alert('Game Over!!!');
}else{
  alert(`congrates! the number is ${num}`);
}