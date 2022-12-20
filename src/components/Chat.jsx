import React from 'react'
import '../stylesheet/chat.css'
import {BsFillCameraFill} from 'react-icons/bs'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-info">
        <span>Dannex</span>
        <div className="chat-icons">
          <span><BsFillCameraFill /></span>
          <span><AiOutlineUserAdd /></span>
          <span><BsThreeDots /></span>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat