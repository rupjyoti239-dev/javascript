let favMovie = "avatar";

let guess = prompt('what is my favorite movie');

while((favMovie != guess) && (guess != 'quit')){
  guess = prompt('wrong guess, try again');
}
if(guess === favMovie){
  console.log('congrates!!');
}