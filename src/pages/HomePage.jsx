import React from 'react'
import Chat from '../components/Chat'
import SideBar from '../components/SideBar'
import "../stylesheet/homepage.css"

const HomePage = () => {
  return (
    <div className='home'>
        <div className='homepage-container'>
            <SideBar />
            <Chat />
        </div>
    </div>
  )
}

export default HomePage