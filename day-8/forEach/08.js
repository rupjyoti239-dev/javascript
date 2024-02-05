let words = ['i','have','an','apple'];
let concate = (ar)=>{
    let str = "";
    ar.forEach((el)=>{
        str +=el;
    });
    return str;
}

console.log(concate(words));