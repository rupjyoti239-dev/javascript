let sum = (...arg) => {
  let sum = 0;
  for (let i of arg) {
    sum += i;
  }
  return sum;
}


console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));