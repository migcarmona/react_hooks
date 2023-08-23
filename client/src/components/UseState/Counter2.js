import React, { useState } from 'react'

export default function Counter2() {
    const [count, setCount] = useState(0)
    const initialCount = 0
    const increment =()=>{
        setCount(count + 5)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            <button onClick={() => setCount(initialCount)}>reset</button>
        </div>
    )
}
