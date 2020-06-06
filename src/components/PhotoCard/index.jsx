import React from 'react'
import { Article, ImageWrapper, Image } from './style'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [like, setLike] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImageWrapper>
                <Image src={src} />
              </ImageWrapper>
            </a>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    !like && toggleLike({ variables: { input: { id } } })
                    setLike(!like)
                  }

                  return (
                    <FavButton like={like} likes={likes} onClick={handleFavClick} />
                  )
                }
              }
            </ToggleLikeMutation>
          </>
      }
    </Article>
  )
}
