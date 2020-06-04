import React from 'react'
import { Article, ImageWrapper, Image, Button } from './style'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [like, setLike] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  const Icon = like ? AiFillHeart : AiOutlineHeart

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImageWrapper>
                <Image src={src} />
              </ImageWrapper>
            </a>
            <Button onClick={() => setLike(!like)}> <Icon size='24px' /> {likes} likes</Button>
          </>
      }
    </Article>
  )
}
