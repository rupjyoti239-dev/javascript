// for the given string predict the output

let str = "apnacollege";
console.log(str.slice(4,9));                  // colle
console.log(str.indexOf("na"));               // 2
console.log(str.replace("apna","our"));       // ourcollege

// separate the "college" part from the above string and replace 'l" with "t" in it
console.log(str.slice(4).replace('l','t').replace('l','t'));
