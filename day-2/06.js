let marks = 95;

if (marks >= 33) {
  console.log("Pass");
  if (marks >= 60) {
    if (marks >= 80) {
      if (marks >= 90) {
        console.log("O");
      } else {
        console.log("A");
      }
    } else {
      console.log("B");
    }
  } else {
    console.log("C");
  }
} else {
  console.log("better luck next time");
}