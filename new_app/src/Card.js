import React from 'react';
import Task from "./Task";


const Card = (props) => {
    const {status, tasks, del} = props
    return (
        <div>

            <h2>
                {status}
            </h2>
            {tasks.filter(task => status === task.status).map(task =>
                <div key={task.id}>
                    <Task task={task}/>
                    <button onClick={() => del(task.id)}>delete</button>
                </div>
            )}
        </div>

    );
};

export default Card;