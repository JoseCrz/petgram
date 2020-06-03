import React from 'react'
import { ImageWrapper, Image, Button } from './style'
import { FiHeart } from 'react-icons/fi'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImageWrapper>
          <Image src={src} />
        </ImageWrapper>
      </a>
      <Button> <FiHeart size='24px' /> {likes} likes</Button>
    </article>
  )
}
