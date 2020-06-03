import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import axios from 'axios'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get('https://petgram-backend-one.now.sh/categories')
        setCategories(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <List>
      {categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)}
    </List>
  )
}
