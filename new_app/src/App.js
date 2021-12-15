import './App.css';
import Card from "./Card";
import {nanoid} from "nanoid";
import {useState} from "react";
import InputNewTask from "./InputNewTask";

function App() {

    const statuses = ['todo', 'progress', 'review', 'done']
    const initialState = [
        {id: nanoid(), name: 'task1', status: statuses[0], done: false},
        {id: nanoid(), name: 'task2', status: statuses[1], done: false},
        {id: nanoid(), name: 'task3', status: statuses[2], done: false},
        {id: nanoid(), name: 'task4', status: statuses[3], done: false},
    ]
    const [tasks, setTasks] = useState(initialState)

    const del = (taskId) => {
       const newTask = tasks.filter(el => el.id !== taskId)
        setTasks(newTask)
    }
    return (
        <div className="App">
            <InputNewTask setTasks={setTasks} statuses={statuses}/>
            {statuses.map(status => <Card del={del} key={status} status={status} tasks={tasks} setTasks={setTasks}/>)}
        </div>
    );
}

export default App;
