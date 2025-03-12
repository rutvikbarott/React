import React, { Children, createContext, useContext, useState } from 'react'

function Theamcontext() {

    const Theamcontext=createContext()
    const Themprovider=({Children})=>{
        const [Theme, Setto] = useState('light');
    }
    const toggleTheme = () => {
        Setto((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
  return (
    <div>
      <Theamcontext.Provider value={{ Theme, toggleTheme }}>
      {Children}
    </Theamcontext.Provider>
    </div>
  )
}
export const useTheme = () => {
  return useContext(Theamcontext);
};
export default Theamcontext
