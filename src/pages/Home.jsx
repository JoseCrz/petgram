import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListofPhotoCards'

export const Home = () => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={1} />
    </>
  )
}
