showUI();

function showUI() {
  var main = document.querySelector(".main");
  main.innerHTML = `
  <h1>ToDos</h1>
  <form action="" id="form">
      <input type="text" 
      id="input" 
      class="input" 
      placeholder="Enter your to do"
      autocomplete="off"
      >
      <ul class="todos" id="todos">
      </ul>
  </form>
  <small>Right click to remove todo! <hr>
      Left click to mark toggle complete.</small>
  `;

  const form = document.getElementById("form");
  const input = document.getElementById("input");
  const todos = document.getElementById("todos");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoText = input.value;

    if (todoText) {
      const todoEl = document.createElement("li");
      todoEl.innerText = todoText;

      todoEl.addEventListener("click", () => {
        todoEl.classList.toggle("completed");
      });

      todoEl.addEventListener("contextmenu", (e) => {
        e.preventDefault();

        todoEl.remove();
      });

      input.value = "";

      todos.appendChild(todoEl);
    }
  });
}
