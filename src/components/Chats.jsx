import React from 'react'
import avt3 from '../assets/ape3'

const Chats = () => {
  return (
    <>
    <div className='chats'>
      <div className="user-chat">
        <img src={avt2}/>
        <div className="user-chat-info">
          <span>Micheal</span>
        </div>
    </div>
    </div>
        <div className='chats'>
        <div className="user-chat">
        <img src={avt2}/>
        <div className="user-chat-info">
            <span>Micheal</span>
        </div>
        </div>
    </div>
    <div className='chats'>
    <div className="user-chat">
        <img src={avt2}/>
        <div className="user-chat-info">
        <span>Micheal</span>
        </div>
    </div>
    </div>
    <div className='chats'>
      <div className="user-chat">
        <img src={avt2}/>
        <div className="user-chat-info">
          <span>Micheal</span>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Chats