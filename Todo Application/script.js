let taskInputEl = document.getElementById("taskInput");
let addTaskBtnEl = document.getElementById("addTaskBtn");
let todoItemsContainerEl = document.getElementById("todoItemsContainer");

function createAndAppendTodo(todoText) {
    let todoElement = document.createElement("li");
    todoElement.classList.add(
        "flex",
        "items-center",
        "justify-between",
        "bg-[#f0f9ff]",
        "border",
        "border-[#bae6fd]",
        "text-[#0369a1]",
        "rounded-lg",
        "p-4",
        "mb-2"
    );

    // Left section
    let leftContainer = document.createElement("div");
    leftContainer.classList.add("flex", "items-center", "gap-3");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("w-4", "h-4");

    let taskTextEl = document.createElement("span");
    taskTextEl.textContent = todoText;
    taskTextEl.classList.add("text-lg");

    checkbox.onclick = function () {
        taskTextEl.classList.toggle("line-through");
        taskTextEl.classList.toggle("text-gray-400");
    };

    leftContainer.appendChild(checkbox);
    leftContainer.appendChild(taskTextEl);

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("text-red-500", "text-lg");

    deleteBtn.onclick = function () {
        todoItemsContainerEl.removeChild(todoElement);
    };

    todoElement.appendChild(leftContainer);
    todoElement.appendChild(deleteBtn);
    todoItemsContainerEl.appendChild(todoElement);
}

addTaskBtnEl.onclick = function () {
    let taskText = taskInputEl.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    createAndAppendTodo(taskText);
    taskInputEl.value = "";
};