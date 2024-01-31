let students = [
  ['rupjyoti', 80],
  ['farid', 85],
  ['viki', 90],
  ['ricky',100]
]


for(let i=0;i<students.length;i++){
  console.log(`info of student ${i+1}`);
  for(let j=0;j<students[i].length;j++){
    console.log(students[i][j]);
  }
}