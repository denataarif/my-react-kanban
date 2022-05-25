import React from 'react'
import Header from './Header'
import Separator from './Separator'
import Card from '../Card/index'

const List = () => {
  return (
    <div>
        <Header />
        <Separator />
        <Card>Card Content</Card>
        <Card>Card Content</Card>
    </div>
  )
}

export default List