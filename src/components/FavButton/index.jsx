import React from 'react'
import { Button } from './styles'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? AiFillHeart : AiOutlineHeart

  return (
    <Button onClick={onClick}> <Icon size='24px' /> {likes} likes</Button>
  )
}
