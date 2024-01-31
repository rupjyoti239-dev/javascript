let favMovie = "avatar";
let guess = prompt('Guess the movie name');

while(guess != favMovie){
  if(guess === 'quit'){
    confirm('are you quiting');
    break;
  }
  guess = prompt('wrong guess, try again');
}
if(guess === favMovie){
  alert('congrates!!');
}
