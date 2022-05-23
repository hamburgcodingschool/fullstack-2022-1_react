import React, { useState }  from 'react';

const HookContainer = () => {

    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    // const [list, List] = useState(0);

    const addToCounter = () => {
        setCounterValue(counterValue + inputValue);
    }

    const substractToCounter = () => {
        setCounterValue(counterValue - inputValue);
    }

    return (
        <>
            <p>{counterValue}</p>

            <div>
                <button onClick={substractToCounter}>
                    -
                </button>
                <input 
                    // type='text' 
                    type='number' 
                    value={inputValue} 
                    onChange={(e) => setInputValue(parseInt(e.target.value))}
                />
                <button onClick={addToCounter}>
                    +
                </button>
            </div>
        </>

    )
}

export default HookContainer;