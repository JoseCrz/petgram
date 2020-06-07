import React from 'react'
import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export const Detail = ({ detailId }) => {
  return (
    <Layout title='Photo' description='Take a closer look'>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
