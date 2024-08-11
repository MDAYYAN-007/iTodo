import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav>
        <h2 className='iTodoHeading'>iTodo</h2>
        <ul>
            <li>Home</li>
            <li>Todos</li>
        </ul>
      </nav>
    </div>
)
}

export default Navbar
