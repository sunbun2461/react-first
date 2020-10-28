import React, { useState } from 'react';


const Counter = () => {

    const [count, setCount] = useState(1500);

  
    const handleDecrement = () => {
        setCount(count / 2);
    };
    return (
        <React.Fragment>
            <p>This count is: {count}</p>
            <button onClick={() => setCount(count * 1.02)}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </React.Fragment>

    )
}



export default Counter;   