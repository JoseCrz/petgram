import React from 'react'
import { Layout } from '../components/Layout'
import { GetFavs } from '../containers/GetFavs'

const Favs = () => {
  return (
    <Layout title='Favs' description='Find your favorite pets'>
      <h1>Favs</h1>
      <GetFavs />
    </Layout>
  )
}

export default Favs
