import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {[1, 2, 3, 4].map(item => <Item key={item}> <Category /> </Item>)}
    </List>
  )
}
