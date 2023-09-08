import React, { useState } from 'react'

export default function MyMemoCounter() {
    const [counterA, setCounterA] = useState(0)
    const [counterA, setCounterB] = useState(0)

    const incrementA = ()=>{
        setCounterA(counterA + 1)
    }

    const incrementB = ()=>{
        setCounterB(counterB + 1)
    }
  return (
    <div>
        <p>counter A is: {counterA}</p>
        <button onClick={incrementA}>incrementA</button>
        </div>
  )
}
