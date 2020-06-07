import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import axios from 'axios'

const useCategoriesFetch = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  // ? Effect to fetch data
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get('https://petgram-backend-one.now.sh/categories')
        setCategories(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesFetch()
  const [showFixed, setShowFixed] = useState(false)

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
    <List fixed={fixed}>
      {
        loading
          ? <Item key='Loading'> <Category /> </Item>
          : categories.map(category => <Item key={category.id}> <Category {...category} path={`/pet/${category.id}`} /> </Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
