import React from 'react'
import List from '../Components/List'

const Home = () => {
  return (
    <div className='bg-[#F2F2FA]'>
      <h1 className='text-3xl font-bold'>My Kanban Board</h1>
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home