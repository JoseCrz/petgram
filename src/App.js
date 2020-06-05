/* eslint-disable */
import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListofPhotoCards'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Logo } from './components/Logo'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? 
          <PhotoCardWithQuery id={detailId} />
          : 
          <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} /> 
          </>
      }
    </>
  )
}
