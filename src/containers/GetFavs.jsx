import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id,
      categoryId,
      src,
      likes,
      userId
    }
  }
`

const renderProp = ({ data, loading, error }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  const { favs } = data
  return <ListOfFavs favs={favs} />
}

export const GetFavs = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)
