import React from 'react'

function Header() {
  return (
    <div className="bg-transparent shadow-md  " style={{  position:"fixed", width:"90%",height:"50px" }}>
          <div className="flex justify-between items-center ml-28">
            <img
              src={require(`../src/photos/Mask Group 3@2x.png`)}
              alt="Lottery Logo"
              className="h-10 md:h-12"
            />
            <nav className="hidden md:flex space-x-6 ml-40" >
              <a href="#" className="text-orange-500 font-medium">HOME</a>
              <a href="#" className="text-orange-500 hover:text-blue-600">CONTEST</a>
              <a href="#" className="text-orange-500 hover:text-blue-600">RESULTS</a>
              <a href="#" className="text-orange-500 hover:text-blue-600">WINNERS</a>
              <div className="flex space-x-4">
                <a href="#" className="text-orange-500 hover:text-blue-600">Log in</a>
                <span>/</span>
                <a href="#" className="text-orange-500 hover:text-blue-600">Register</a>
              </div>
            </nav>
          </div>
        
    </div>
  )
}

export default Header
