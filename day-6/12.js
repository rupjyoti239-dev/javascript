let multipleFunction = function (fun, count) {   //higher order function
  for (let i = 0; i < count; i++) {
    fun();
  }
}


let greet = function () {
  console.log("hello");
}

multipleFunction(greet, 5)