const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

addBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("article");
        listItem.classList.add('card');
        listItem.innerHTML = `
            <header class="card-header">
                <p>${day}-${month}-${year}</p>
            </header>
            <span class="task mr-2.5 flex-grow">${taskText}</span>
            <div class="delete-text">Delete</div>
            <span class="delete-btn cursor-pointer inline-block">❌</span>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
});