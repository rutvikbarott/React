
import React, { useState } from 'react'

function Counts() {
  const[count,setcount] = useState(0);

    const incremenet=()=>setcount(count+1)
    const decrement=()=>setcount(count-1)
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incremenet}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counts

