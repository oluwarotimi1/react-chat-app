import React from 'react'
import '../stylesheet/navbartwo.css'
import Chats from './Chats'
import NavbarTwo from './NavbarTwo'
import Search from './Search'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div>
        <NavbarTwo />
        <Search />
        <Chats />
        </div>
        
    </div>
  )
}

export default SideBar