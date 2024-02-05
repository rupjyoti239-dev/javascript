let temp = [22.5,15,18.3,-15,-5,44,33,32,30];

let weather = (ar)=>{
  let x = ar.map((el)=>{
    if(el>30){
      el = "hot"
    }else if(el<0){
      el= "frezzing";
    }
    return el;
  })
  return x;
}



console.log(weather(temp));