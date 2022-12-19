import React from 'react'
import '../stylesheet/navbartwo.css'
import NavbarTwo from './NavbarTwo'
import Search from './Search'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div>
        <NavbarTwo />
        <Search />
        </div>
        
    </div>
  )
}

export default SideBar