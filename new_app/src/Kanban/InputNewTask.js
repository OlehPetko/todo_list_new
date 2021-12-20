import React, {useState} from 'react';


const InputNewTask = (props) => {
    const {postCard} = props
    const [newTask, setNewTask] = useState('')

    return (
        <div>
            <input placeholder='new task' value={newTask} onChange={event => setNewTask(event.target.value)}/>
            <button type="button" className="btn btn-primary" onClick={() => postCard(newTask, setNewTask)}>Add task</button>
        </div>

    );
};

export default InputNewTask;