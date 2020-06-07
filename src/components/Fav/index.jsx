import React from 'react'
import { Link, Image } from './style'

export const Fav = ({ id, src }) => {
  return (
    <Link to={`/detail/${id}`}>
      <Image src={src} />
    </Link>
  )
}
