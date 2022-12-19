import React from 'react'
import avt1 from '../assets/ape1.jpeg'

const NavbarTwo = () => {
  return (
    <div className='navbar'>
      <span className="logo">Rechat</span>
      <div className="user">
        <img src={avt1} alt=""/>
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default NavbarTwo