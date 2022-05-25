import React from 'react'
import Avatar from './Avatar'
import Header from './Header'
import TagList from './TagList'

const Card = ({ children }) => {
  return (
      <div className='bg-white rounded-xl'>
        <Header />
        {children}
        <TagList />
        <Avatar />
      </div>
  )
}

export default Card