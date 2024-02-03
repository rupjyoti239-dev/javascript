let createFunction = function (request) {
  if (request === "area") {
    let area = function (radius) {
      let result = (Math.PI * radius * radius);
      return result;
    }
    return area;
  }
  else if (request === "circumference") {
    let circum = function (radius) {
      let result = 2*Math.PI*radius;
     return result;
    }
    return circum;
  }
  else if(request === "diameter"){
    let diameter = function(radius){
      let result = 2*radius;
     return result;
    }
    return diameter;
  }
}



let x = createFunction("diameter");
console.log(x(3));