const student = {
  name: "Rupjyoti",
  marks: 25,
  prop: this,
  getName: function () {
    console.log(this);
    console.log(this.name);
  },
  getMarks: () => {
    console.log(this);
    console.log(this.marks);
  }
}

// console.log(student);
student.getName();
// student.getMarks();
