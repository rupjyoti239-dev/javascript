// THIS KEYWORD
const student = {

  name : "Rupjyoti",
  age: 24,
  maths: 82,
  phys: 65,
  chem: 76,
  getAvg(){
    let avg = (this.maths+this.phys+this.chem)/3
    return avg.toFixed(2);
  }
}

console.log(student.getAvg());