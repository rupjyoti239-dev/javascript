// todo app

let todos = [];

let req = prompt(`
      Enter an Option
      1. Add : To add new item
      2. Delete : To delete a item
      3. Show : To display the list
      4. Quit: To quit the App
`);

while (true) {
  if (req === "Quit") {
    break;
  }
  if (req === 'Add') {
    let item = prompt("Enter the item");
    todos.push(item);
  }
  else if (req === 'Delete') {
    let del = prompt("enter the todo name");
    if(todos.includes(del)){
      let index = todos.indexOf(del);
      todos.splice(index,1);
    }else{
      console.log('Item not Exist');
    }
  }
  else if (req === 'Show') {
    console.log(`Your todos are `);
    for(item of todos){
      console.log(item);
    }
  }
  req = prompt(`
      Enter an Option
      1. Add : To add new item
      2. Delete : To delete a item
      3. Show : To display the list
      4. Quit: To quit the App
`);
}
