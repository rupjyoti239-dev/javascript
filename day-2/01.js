// create a traffic light system that shows what to do based on colors

let color = "green";

if(color === "red"){
  console.log("stop");
}
else if(color === "yellow"){
  console.log("slow down");
}
else if(color === "green"){
  console.log("Goo!");
}else{
  console.log(`Traffic light is broken`);
}