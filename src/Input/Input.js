import React, {useRef, useState} from 'react';

const Input = (props) => {
    const {setCitiesInputValue} = props
    const inputRef = useRef(null)
    const [inputValue, setInputValue] = useState('')
    const currentDate = new Date().toDateString()
    const handleOnClick = (inputValue) => {
        setCitiesInputValue((currentArray) => [...currentArray, inputValue])
        setInputValue('')
        // inputRef.current.focus()
    }
    const handleOnSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            {currentDate}
            <form className='InputWrap' onSubmit={handleOnSubmit}>
                <input className='Input' value={inputValue} onChange={event => setInputValue(event.target.value)}/>
                <button className='Button' onClick={() => handleOnClick(inputValue)}>+</button>
            </form>
        </div>
    );
};

export default Input;