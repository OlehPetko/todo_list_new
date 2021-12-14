import React, {useState} from 'react';

const InputCounter = (props) => {

    const {getCount} = props
    const [newCount, setNewCount] = useState( [])

    return (
        <div>
            <input type='Number' placeholder='new counter' value={newCount}
                   onChange={event => setNewCount(event.target.value)}/>

            <button onClick={() => getCount(newCount, setNewCount)}>add counter</button>
        </div>
    );
};

export default InputCounter;