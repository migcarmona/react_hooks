import React, {useEffect, useState} from 'react'

export default function EffectExample2() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    useEffect(()=>{
        document.title = `you clicked: ${count} times`
        console.log('use effect is called')
    },[count])
  return (
    <div>
        {count}
        <br />
        <button onClick={()=>setCount(count + 1)}>+</button>
        <br />
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        
        </div>
  )
}
