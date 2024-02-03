function outerFun(){
  let x = 5;
  let y = 6;
  function innerFun(){
    console.log(x);
  }
  innerFun()
  console.log(x+y);
}


outerFun();
// innerFun();  THIS WILL GIVE ERROR