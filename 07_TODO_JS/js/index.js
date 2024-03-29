//  read from local storage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

let listId = 0;
const todoForm = document.getElementById("todoForm");
const alertMsg = document.getElementById("alertMsg");
const addTask = document.getElementById("addTask");
const updateTask = document.getElementById("updateTask");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoName = document.getElementById("taskName").value;
    const todoPriority = document.getElementById("priority").value;

    if (todoName === "") {
        const d = `
        <div class="alert alert-danger alert-dismissible fade show mb-4 role="alert">
            <div class="text-center"><strong>Error!</strong> Please enter task name.</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        
        alertMsg.innerHTML = d;
        return;
    }

    const todo = {
        id: todos.length + 1,
        name: todoName,
        priority: todoPriority
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
    todoForm.reset();
});

const btnChange = (v) => {
    addTask.style.display = v == 1 ? "block" : "none";
    updateTask.style.display = v == 1 ? "none" : "block";
}

const editTodo = (id) => { 
    document.getElementById("taskName").value = todos[id - 1].name;
    document.getElementById("priority").value = todos[id - 1].priority;

    listId = id;

    btnChange(2);
}

updateTask.addEventListener("click", (e) => { 
    e.preventDefault();

    const todoName = document.getElementById("taskName").value;
    const todoPriority = document.getElementById("priority").value;

    if (todoName === "") {
        const d = `
        <div class="alert alert-danger alert-dismissible fade show mb-4 role="alert">
            <div class="text-center"><strong>Error!</strong> Please enter task name.</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        
        alertMsg.innerHTML = d;
        return;
    }

    todos[listId - 1].name = todoName;
    todos[listId - 1].priority = todoPriority;

    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
    todoForm.reset();
});

const deleteTodo = (id) => { 
    localStorage.setItem("todos", JSON.stringify(todos.filter((todo) => todo.id !== id)));
    todos = todos.filter((todo) => todo.id !== id);

    todoForm.reset();
    renderTodos();
}

const renderTodos = () => {
    let data = "";

    if (!todos.length) {
        data = `
        <tr>
            <td colspan="3" class="text-center">No Data Found</td>
        </tr>`;
    } else {
        todos.forEach((todo) => {
            const prioritySpan = todo.priority === "High" ? "danger" : todo.priority === "Medium" ? "warning": "secondary";
            data += `
        <tr>
            <td>${todo.name} <span class="badge bg-${prioritySpan}">${todo.priority}</span></td>

            <td>
                <button class="btn btn-success" onclick="editTodo(${todo.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-danger" onclick="deleteTodo(${todo.id})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>`;
        });
    }
    document.getElementById("todoListTbody").innerHTML = data;
    
    btnChange(1);
};

renderTodos();