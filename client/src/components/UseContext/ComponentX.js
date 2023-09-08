import React, { useContext } from 'react'
import { CountContext } from '../../App'

export default function ComponentX() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentX
            <button onClick={() => countContext.countDispatch('increment')}>increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
        </div>
    )
}