import React from 'react'
import avt1 from '../assets/ape1.jpeg'
import avt3 from '../assets/ape3.jpeg'
import avt4 from '../assets/ape4.jpeg'
import avt5 from '../assets/ape5.jpeg'

const Chats = () => {
  return (
    <>
    <div className='chats'>
      <div className="user-chat">
        <img src={avt3}/>
        <div className="user-chat-info">
          <span>Micheal</span>
        </div>
    </div>
    </div>
        <div className='chats'>
        <div className="user-chat">
        <img src={avt4}/>
        <div className="user-chat-info">
            <span>Micheal</span>
        </div>
        </div>
    </div>
    <div className='chats'>
    <div className="user-chat">
        <img src={avt5}/>
        <div className="user-chat-info">
        <span>Micheal</span>
        </div>
    </div>
    </div>
    <div className='chats'>
      <div className="user-chat">
        <img src={avt1}/>
        <div className="user-chat-info">
          <span>Micheal</span>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Chats