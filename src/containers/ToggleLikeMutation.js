import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const LIKE = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input:$input) {
      id,
      liked,
      likes
    }
  }
`

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE}>
      {
        children
      }
    </Mutation>
  )
}
