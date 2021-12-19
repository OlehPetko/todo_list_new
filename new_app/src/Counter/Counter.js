import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const plusAndMinus = (value) => {
      setCount(count + value)
    }
    return (
        <div>
            <button type="button" className="btn btn-light" onClick={() => plusAndMinus(-1)}>-</button>
            {count}
            <button type="button" className="btn btn-light" onClick={() => plusAndMinus(1)}>+</button>

        </div>
    );
};

export default Counter;