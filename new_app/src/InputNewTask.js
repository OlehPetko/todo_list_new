import React, {useState} from 'react';
import {nanoid} from "nanoid";


const InputNewTask = (props) => {
    const {setTasks, statuses} = props
    const [newTask, setNewTask] = useState('')
    const addTask = (newTask) => () => {
        setTasks((currentArray) => [...currentArray, {id: nanoid(), name: newTask, status: statuses[0], done: false},])
        setNewTask('')
    }
    return (
        <div>
            <input placeholder='new task' value={newTask} onChange={event => setNewTask(event.target.value)}/>
            <button onClick={addTask(newTask)}>add task</button>
        </div>
    );
};

export default InputNewTask;