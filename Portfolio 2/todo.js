function addTask(taskDescription) {
    if (!taskDescription.trim()) return; // Do not add empty tasks

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    
    // Add task content
    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    taskContent.textContent = taskDescription;
    taskItem.appendChild(taskContent);
    
    // Add delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-task');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
    };
    taskItem.appendChild(deleteButton);
    
    // Append the new task to the task list
    taskList.appendChild(taskItem);
}

function createFancyTodoListCSS() {
    const styleElement = document.createElement('style');
    styleElement.textContent = 
    `
        body{
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
            font-family: 'Roboto', sans-serif;
        }

        h1 {
            text-align: center;
            margin-top: 50px;
            font-size: 36px;
            font-weight: bold;
            color: #333;

        }
        .todo{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 80vh;
            width: 100%;
            font-size: 18px;
            color: #333;
            line-height: 1.5;

        }
        .main {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
        }
        .task-item {
            background-color: #f0f0f0;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            padding: 10px 15px;
            margin-bottom: 10px;
            width: 100%;
            max-width: 400px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .task-content {
            font-size: 18px;
        }
        .delete-task {
            background-color: #ff4d4d;
            border: none;
            border-radius: 4px;
            color: white;
            padding: 5px 10px;
            cursor: pointer;
        }
        #input-box {
            padding: 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
            width: calc(100% - 22px);
            max-width: 400px;
            margin-bottom: 10px;
        }
        #addTaskButton {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 15px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
        }
        #addTaskButton:hover {
            background-color: #45a049;
        }
        task-item:hover {
            background-color: #e6e6e6;
            cursor: pointer;
        }
        task-item:hover .delete-task {
            background-color: #ff1a1a;

        }
        task-item:hover .task-content {
            text-decoration: line-through;
        }

        taskList{
            display: flex;
            flex-direction: column;
            margin-top: 50px;
            width: 100%;
            max-width: 400px;
            flex-wrap: wrap;
        }

        task-item{
            width: 100%;
            max-width: 400px;
            margin-bottom: 10px;
            background-color: #f0f0f0;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            padding: 10px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.3s ease;
            
        }
    `;
    document.head.appendChild(styleElement);
}

// Call the function to inject the styles
createFancyTodoListCSS();