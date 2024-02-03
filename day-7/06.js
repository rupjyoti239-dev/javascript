// write a functions that prints "hello world" 5 times at a interval of 2 seconds

let id = setInterval(() => {
  console.log("hello world");
}, 2000);

setTimeout(()=>{
  clearTimeout(id);
  console.log("clear interval ran");
},10000)