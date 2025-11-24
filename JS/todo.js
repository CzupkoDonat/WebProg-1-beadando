const input = document.getElementById("toDoInput");
const todoList = document.getElementById("toDoList");
const counter = document.getElementById("counter");

function createIcon(symbol, onClick) {
  const icon = document.createElement("span");
  icon.className = "icon";
  icon.textContent = symbol;
  if (onClick) icon.addEventListener("click", onClick);
  return icon;
}

function updateCounter(counterEl) {
  const activeItems = todoList.querySelectorAll('li:not(.completed)').length;
  counterEl.textContent = activeItems;
}

function createTodoItem(text, counterEl) {
  const li = document.createElement("li");
  li.className = "card";

  const textEl = document.createElement("p");
  textEl.textContent = text;

  const iconWrap = document.createElement("div");
  iconWrap.className = "icons";

  const deleteIcon = createIcon("✖", () => {
    li.remove();
    updateCounter(counterEl);
  });

  const checkIcon = createIcon("✔", () => {
    deleteIcon.remove();
    li.classList.add('completed');
    updateCounter(counterEl);
  });

  iconWrap.append(deleteIcon, checkIcon);
  li.append(textEl, iconWrap);

  return li;
}

function addToDo() {
  const text = input.value.trim();
  if (!text) return;

  const item = createTodoItem(text, counter);
  todoList.appendChild(item);

  input.value = "";
  updateCounter(counter);
}

window.addEventListener('DOMContentLoaded', () => {
const defaultTodos = ["Teendő 1", "Teendő 2"];
defaultTodos.forEach(todo => {
const item = createTodoItem(todo, counter);
todoList.appendChild(item);
});
updateCounter(counter);
});