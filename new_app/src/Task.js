import React from 'react';

const Task = (props) => {
    const {task} = props
    return (
        <div>
            {task.name}
        </div>
    );
};

export default Task;