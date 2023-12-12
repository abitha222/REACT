import React, { useState } from 'react'
const Counter = () => {
    const [count,setCount]=useState(0)
    const Incerement=()=>{
    setCount(count+1);
    }
    const Decrement=()=>{
        setCount(count-1)
    }
    return(
        <div>
            <button onClick={Incerement}>Increment</button>
            <h3>{count}</h3>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}
export default Counter;