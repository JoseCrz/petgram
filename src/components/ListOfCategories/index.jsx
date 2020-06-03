import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.fetch('https://petgram-backend-one.now.sh/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <List>
      {categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)}
    </List>
  )
}
