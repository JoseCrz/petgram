import React, { useEffect, useState, useRef } from 'react'
import { Article, ImageWrapper, Image, Button } from './style'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

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
  const [like, setLike] = useState(() => {
    try {
      return window.localStorage.getItem(key)
    } catch (error) {
      console.error(error)
      return false
    }
  })
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

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLike(value)
    } catch (error) {
      console.error(error)
    }
  }

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
            <Button onClick={() => setLocalStorage(!like)}> <Icon size='24px' /> {likes} likes</Button>
          </>
      }
    </Article>
  )
}
