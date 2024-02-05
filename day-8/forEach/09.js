let ar = ["apple","orange","kiwi","grapes"];


let NumberOfChar = (ar)=>{
   let char = [];
   ar.forEach((el)=>{
      char.push(el.length);
   });
   return char;
}

console.log(NumberOfChar(ar));