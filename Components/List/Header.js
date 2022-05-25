import React from 'react'
import CoverImage from './CoverImage'
import Meta from './Meta'

const Header = () => {
  return (
    <div className='bg-white-500 rounded-xl'>
        <CoverImage />
        <Meta />
    </div>
  )
}

export default Header