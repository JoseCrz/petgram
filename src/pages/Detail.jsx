import React from 'react'
import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

const Detail = ({ detailId }) => {
  return (
    <Layout title='Photo' description='Take a closer look'>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}

export default Detail
