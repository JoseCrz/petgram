import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? AiFillHeart : AiOutlineHeart

  return (
    <Button onClick={onClick}> <Icon size='24px' /> {likes} likes</Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
