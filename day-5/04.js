 const person = {
  name: "Rupjyoti"
 }

 person.age = 24;
 person.address = "Guwahati"
 person['contact number']= "1234567898";
 console.log(person);


 console.log(person['contact number']);
 person.age = 20;
 console.log(person);



//  delete
delete person.address;
console.log(person);