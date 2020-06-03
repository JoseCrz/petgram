import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import axios from 'axios'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  // ? Effect to fetch data
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

  // ? Effect to determine whether or not to render the mini fixed list
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 210
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = fixed => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
