import React, { useContext } from 'react'
import { CountContext } from '../../App'

export default function ComponentZ() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentZ
            <button onClick={() => countContext.countDispatch('increment')}>increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
        </div>
    )
}