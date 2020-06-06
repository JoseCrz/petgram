import React from 'react'
import { Button } from './styles'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export const FavButton = ({ like, likes, onClick }) => {
  const Icon = like ? AiFillHeart : AiOutlineHeart

  return (
    <Button onClick={onClick}> <Icon size='24px' /> {likes} likes</Button>
  )
}
