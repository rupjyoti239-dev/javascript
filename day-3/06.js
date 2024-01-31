/* 
for the given start state of an array change it to final form using method
start: ['january','july','march','august'];
final: ['july','june','march','august'];
*/



let ar = ['january', 'july', 'march', 'august'];
ar.shift();
ar.shift();
console.log(ar);
ar.unshift('july','june');
console.log(ar);