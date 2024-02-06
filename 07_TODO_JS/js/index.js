let todos = [];

const todoData = document.getElementById("todoData");
const todoForm = document.getElementById("todoForm");
const alertMsg = document.getElementById("alertMsg");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("taskName").value;
    if (name === "") {
        alertMsg.style.display = "block";
        return;
    }

    const priority = document.getElementById("priority").value;
    const todo = {
        id: todos.length + 1,
        name,
        priority,
    };
    todos.push(todo);
    renderTodos();
    todoForm.reset();
});

const renderTodos = () => {
    let todoList = "";
    todos.forEach((todo) => {
        todoList += `
        <tr>
            <td>${todo.name}</td>
            <td>${todo.priority}</td>
            <td>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </td>
        </tr>`;
    });
    todoData.innerHTML = todoList;
};