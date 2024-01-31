/* 
for the given start state of an array change it to final form using splice method
start: ['january','july','march','august'];
final: ['july','june','march','august'];
*/

let ar = ['january', 'july', 'march', 'august'];
ar.splice(0,2,"july",'june');
console.log(ar);