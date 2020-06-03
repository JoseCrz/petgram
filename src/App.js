import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { PhotoCard } from './components/PhotoCard'

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
    <PhotoCard />
  </>
)
