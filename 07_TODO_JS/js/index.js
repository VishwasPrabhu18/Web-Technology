//  read from local storage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoData = document.getElementById("todoData");
const todoForm = document.getElementById("todoForm");
const alertMsg = document.getElementById("alertMsg");

todoForm.addEventListener("submit", (e) => { 
    e.preventDefault();
    const todoName = document.getElementById("taskName").value;
    const todoPriority = document.getElementById("priority").value;
    const todo = {
        id: todos.length + 1,
        name: todoName,
        priority: todoPriority
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
});


const renderTodos = () => {
    let data = "";
    todos.forEach((todo) => {
        data += `
        <tr>
            <td>${todo.name}</td>
            <td>${todo.priority}</td>
            <td>
                <button class="btn btn-success" onclick="deleteTodo(${todo.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteTodo(${todo.id})">Delete</button>
            </td>
        </tr>`;
    });
    document.getElementById("todoListTbody").innerHTML = data;
};

// renderTodos();