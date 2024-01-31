let cars = ['maruti suzuki',"toyota",'ford'];
console.log(cars);

cars.push('bmw');
console.log(cars);           //['maruti suzuki',"toyota",'ford', 'bmw']

let del = cars.pop();
console.log(del);            // bmw
console.log(cars);           //['maruti suzuki',"toyota",'ford']



let dlt = cars.shift();
console.log(dlt);            // maruti suzuki
console.log(cars);           // [ 'toyota', 'ford' ] 



cars.unshift("audi");
console.log(cars);           // [ 'audi', 'toyota', 'ford' ] 
cars.unshift('bmw','volvo','tata');
console.log(cars);          //  [ 'bmw', 'volvo', 'tata', 'audi', 'toyota', 'ford' ]