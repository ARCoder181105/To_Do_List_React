import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        } else {
            alert("Enter Some Task");
        }
    }

    function deleteTask(index) {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index > 0) {
            setTasks(prevTasks => {
                const newTasks = [...prevTasks];
                [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
                return newTasks;
            });
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            setTasks(prevTasks => {
                const newTasks = [...prevTasks];
                [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
                return newTasks;
            });
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-btn" onClick={addTask}>Add Task</button>
                <ol>
                    {tasks.map((task, i) => (
                        <li key={i}>
                            <span className="text">{task}</span>
                            <button className="delete-btn" onClick={() => deleteTask(i)}>Delete</button>
                            <button className="move-btn" onClick={() => moveTaskUp(i)}>👆</button>
                            <button className="move-btn" onClick={() => moveTaskDown(i)}>👇</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
