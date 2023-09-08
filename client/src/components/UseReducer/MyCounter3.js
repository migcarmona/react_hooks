import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function MyCounter3() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
            <div>
            <h1>{countTwo}</h1>
            <button onClick={() => dispatchTwo('increment')}>increment</button>
            <button onClick={() => dispatchTwo('decrement')}>decrement</button>
            <button onClick={() => dispatchTwo('reset')}>reset</button>
            </div>
        </div>
    )
}
