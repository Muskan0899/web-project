document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => editTask(taskSpan, taskInput));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function editTask(taskSpan, taskInput) {
    const originalText = taskSpan.textContent;
    taskInput.value = originalText;
    taskInput.focus();

    document.getElementById('addTaskBtn').textContent = 'Update Task';
    document.getElementById('addTaskBtn').removeEventListener('click', addTask);
    document.getElementById('addTaskBtn').addEventListener('click', function updateTask() {
        const updatedText = taskInput.value.trim();
        if (updatedText !== "") {
            taskSpan.textContent = updatedText;
            taskInput.value = "";
            document.getElementById('addTaskBtn').textContent = 'Add Task';
            document.getElementById('addTaskBtn').removeEventListener('click', updateTask);
            document.getElementById('addTaskBtn').addEventListener('click', addTask);
        }
    });
}
