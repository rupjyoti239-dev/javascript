// guess the output

const obj = {
  name: "Rupjyoti",
  msg(){
    console.log(this.name);
  }
}

setTimeout(obj.msg,1000);