import React, {useState} from 'react';

const CounterDifficul = () => {

    const initialState = [
        {id: Math.random(), value: 1, buttons: [1]},
        {id: Math.random(), value: 2, buttons: [1, 2]},
        {id: Math.random(), value: 3, buttons: [1, 2, 3]},
    ]
    const [counters, setCounters] = useState(initialState)
    const plusAndMinus = (buttonsId, value) => ()  => {
      setCounters((currentArray) => currentArray.map(el => el.id === buttonsId ? {...el, value: el.value + value} : el))
    }

    return (
        <div>
            {counters.map(counter =>
                <div key={counter.id}>
                    {counter.buttons.map(elButtons =><button key={elButtons} onClick={plusAndMinus(counter.id, - elButtons)}>{-elButtons}</button> )}
                    {counter.value}
                    {counter.buttons.map(elButtons =><button key={elButtons} onClick={plusAndMinus(counter.id, elButtons)}>{elButtons}</button>)}
                </div>)}
        </div>
    );
};

export default CounterDifficul;