import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListofPhotoCards'

export const Home = ({ categoryId }) => {
  return (
    <Layout title='Home' description='The cutest pets on  the internet'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}
