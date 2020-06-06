import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const LIKE_MUTATION = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input:$input) {
      id,
      liked,
      likes
    }
  }
`

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_MUTATION}>
      {
        children
      }
    </Mutation>
  )
}
