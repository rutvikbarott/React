

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <div>
        <button
          onClick={() => dispatch(increment())}
          style={{ padding: '10px', margin: '10px', fontSize: '16px' }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ padding: '10px', margin: '10px', fontSize: '16px' }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
