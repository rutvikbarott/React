import React from 'react'

function FruitList() {
     
        
        const fruits = ['Apple', 'Banana', 'Cherry', 'Grapes', 'Orange'];
    
  return (
    <div>
       <h2>List of Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default FruitList
