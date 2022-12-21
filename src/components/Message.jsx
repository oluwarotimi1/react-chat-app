import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="message-info">
        <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <span>just now</span>
      </div>
      <div className="message-content">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
      </div>
    </div>
  )
}

export default Message