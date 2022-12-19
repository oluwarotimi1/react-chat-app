import React from 'react'
import '../stylesheet/homepage.css'
import avt2 from '../assets/ape2.jpeg'

const Search = () => {
  return (
    <div className='search'>
      <div className="search-form">
        <input type="text" placeholder='Search User' />
      </div>
      <div className="user-chat">
        <img src={avt2}/>
        <div className="user-chat-info">
          <span>Micheal</span>
        </div>
      </div>
    </div>
  )
}

export default Search