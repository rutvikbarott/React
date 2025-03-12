import React from 'react'
import { useDispatch } from 'react-redux'
import { decremenet, incremenet, incrementByAmount } from './Counter/Countersclice'

function Useselector() {


    const dispatch = useDispatch()
    const count =Useselector((state)=>state.counter.value)
  return (
    <div>
     <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(incremenet())}>Increment</button>
      <button onClick={() => dispatch(decremenet())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
    
  )
}

export default Useselector
