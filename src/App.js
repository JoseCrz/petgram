import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListofPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
