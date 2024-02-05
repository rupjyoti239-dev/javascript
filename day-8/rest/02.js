let sum = (...arg)=>{
   return arg.reduce((sum,el)=>{
     return sum +=el
    })
}

console.log(sum(1,2,3,4,5));