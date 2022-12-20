import React from 'react'
import {GrAttachment} from 'react-icons/gr'
import {BsImages} from 'react-icons/bs'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <BsImages />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor='file'>
          <GrAttachment />
          <img src={<GrAttachment/>} alt=""  style={{display:"none"}}/>
        </label>
        <button className='send'>Send</button>
      </div>
    </div>
  )
}

export default Input