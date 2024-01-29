// take the users name and age as input using prompt. then return back the following statement to the user as an alert by subtituting their name and age.  NAME is AGE years old 

const name = prompt('Enter your name');
const age = parseInt(prompt('Enter your age'));
const output = `${name} is ${age} years old`;
alert(output);
