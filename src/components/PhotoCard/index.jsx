import React, { useEffect, useState, useRef } from 'react'
import { Article, ImageWrapper, Image, Button } from './style'
import { FiHeart } from 'react-icons/fi'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(() => {
    import('intersection-observer')
      .then(() => {
        const observer = new window.IntersectionObserver(entries => {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            console.log('Intersecting')
            setShow(true)
            observer.disconnect()
          }
        })

        observer.observe(element.current)
      })
  }, [element])

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
            <Button> <FiHeart size='24px' /> {likes} likes</Button>
          </>
      }
    </Article>
  )
}
