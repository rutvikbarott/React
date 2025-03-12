import React, { useState } from 'react'

function Useref() {
    const [count, setCount] = useState(0);
  

  const countRef = Useref(0);

  const incrementWithRef = () => {
    countRef.current += 1;
    console.log('Ref Value:', countRef.current);
  };


  const incrementWithState = () => {
    setCount(count + 1);
  }
  return (
    <div>
       <h1>React useRef Example to Avoid Re-renders</h1>
      <div>
        <p>State Value (Triggers Re-render): {count}</p>
        <button onClick={incrementWithState}>Increment State</button>
      </div>
      
      <div>
        <p>Ref Value (Does NOT trigger re-render): {countRef.current}</p>
        <button onClick={incrementWithRef}>Increment Ref</button>
      </div>
    </div>
  )
}

export default Useref
