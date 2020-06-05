import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { PhotoCard } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      ({ loading, error, data = {} }) => {
        if (loading) return <h1>Loading...</h1>
        if (error) return <h1>Error :(</h1>

        const { photo = {} } = data
        return <PhotoCard {...photo} />
      }
    }
  </Query>
)
