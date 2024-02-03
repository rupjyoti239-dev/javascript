// guess the output

let length = 4;
function callback() {
  console.log(this.length);
}

callback();


const object = {
  length: 5,
  method(callback) {
    callback();
  },
};


object.method(callback,1,2);