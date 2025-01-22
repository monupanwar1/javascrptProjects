const todoInput =document.querySelector(".todo_input");
const todoList =document.querySelector(".todo_list");

const addTodo=()=>{
   const todoItems =document.createElement('li');
   

   todoInput.value==""?(
      console.log("todo"),
      console.error("enter a todo")

   ):(
     
      todoInput.focus(),
      todoItems.textContent=todoInput.value,
      todoList.appendChild(todoItems),
      console.log(`todo added successfullY`),
      localStorage.setItem("todo", todoInput.value),
      console.log(todoList.textContent),
      todoInput.value=""


   )
}
