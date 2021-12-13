import React from 'react';

const Count = (props) => {
    const{count, plusAndMinusForCount} = props
    return (
        <div>
            <button onClick={plusAndMinusForCount(count.id, -1)}>-</button>
            {count.value}
            <button onClick={plusAndMinusForCount(count.id, +1)}>+</button>
        </div>
    );
};

export default Count;