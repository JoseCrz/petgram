import React, { useEffect, useState, useRef } from 'react'
import { Article, ImageWrapper, Image, Button } from './style'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const loadPollyfill = async () => {
  try {
    await import('intersection-observer')
  } catch (error) {
    console.log(error)
  }
}

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [show, setShow] = useState(false)
  const [like, setLike] = useLocalStorage(key, false)
  const element = useRef(null)

  useEffect(() => {
    if (!window.IntersectionObserver) loadPollyfill()

    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })

    observer.observe(element.current)
  }, [element])

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
