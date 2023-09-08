import React, { useReducer } from 'react'

const initialState = {
    counterA: 0,
    counterB: 15
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counterA: state.counterA + action.value};
        case 'decrement':
            return {...state, counterA: state.counterA - action.value};
        case 'incrementB':
            return {...state, counterB: state.counterB + action.value};
        case 'decrementB':
            return {...state, counterB: state.counterB - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function MyCounter2() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Counter A: {count.counterA}</h1>
            <h1>Counter B: {count.counterB}</h1>
            <button onClick={() => dispatch({type:'increment', value: 1})}>increment</button>
            <button onClick={() => dispatch({type:'decrement', value: 1})}>decrement</button>
            <button onClick={() => dispatch({type:'increment', value: 5})}>increment 5</button>
            <button onClick={() => dispatch({type:'decrement', value: 5})}>decrement 5</button>
            <button onClick={() => dispatch({type:'incrementB', value: 5})}>increment 5 on B</button>
            <button onClick={() => dispatch({type:'decrementB', value: 5})}>decrement 5 on B</button>
            <button onClick={() => dispatch({type:'reset'})}>reset</button>
        </div>
    )
}
