/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/
console.log("The todo list")

// First we set up some variables to interact with the DOM

var input = document.getElementById("description");
var button = document.getElementById("add-button");
var todoList = document.getElementById("todo-list");

// Each time a todo is submitted add the value of the input field as a new li element

button.addEventListener("click", function () {
  var newTodoText = input.value;
  input.value = "";

  var newLiTag = document.createElement("li");

  newLiTag.innerHTML = newTodoText;

  // Creating a delete button for each todo item
  var delButton = document.createElement("button");
  delButton.innerHTML = "Delete"

  newLiTag.appendChild(delButton)

  // "this" function removes an li when clicked
  delButton.addEventListener("click", function () {
    this.parentElement.remove();
  })

  // Adds or removes the strikethrough for each item
  newLiTag.addEventListener("click", function () {
    if (this.style.textDecoration != "line-through") {
      this.style.textDecoration = "line-through";
    } else {
      this.style.textDecoration = "";
    }

  });
  // Now with the completed todo item ready to be added, we append it to the ul ! 

  todoList.appendChild(newLiTag);
});
