
const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newTodo");

function addTodo() {
  const todoText = newTodoInput.value.trim();

  if (todoText !== "") {
    const newTodo = document.createElement("li");
    newTodo.innerHTML = `
      <span>${todoText}</span>
      <button class="done-btn" onclick="markDone(this)">Done</button>
      <button class="delete" onclick="deleteTodo(this)">Delete</button>
    `;
    todoList.appendChild(newTodo);
    newTodoInput.value = ""; 
  }
}

function deleteTodo(button) {
  const listItem = button.parentNode;
  listItem.remove();
}

function markDone(button) {
  const listItem = button.parentNode;
  const todoText = listItem.querySelector("span");
  todoText.classList.add("done");
  button.style.display = "none";
}
