import React from 'react'
import { useTheme } from './Theamcontext';

function Toggele() {
    const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
    </div>
  )
}

export default Toggele
