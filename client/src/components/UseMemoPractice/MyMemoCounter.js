import React, { useState, useMemo } from 'react'

export default function MyMemoCounter() {
    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)

    const incrementA = () => {
        setCounterA(counterA + 1)
    };

    const incrementB = () => {
        setCounterB(counterB + 1)
    };

    const evenNumber = useMemo((result)=>{
        let i = 0
        while (i < 200000000) i++
        result = counterA % 2 === 0
        return result
    }, [counterA]);

    return (
        <div>
            <div>
                <p>counter A is: {counterA} and it is: {evenNumber ? "even" : "odd"}</p>
                <button onClick={incrementA}>incrementA</button>
            </div>
            <div>
                <p>counter B is: {counterB}</p>
                <button onClick={incrementB}>incrementB</button>
            </div>
        </div>
    )
}
