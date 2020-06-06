import React from 'react'
import { Link, Image } from './styles'
import defaultImage from '../../static/img/loading.gif'

export const Category = ({ cover = defaultImage, path = '#', emoji = '🔮' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)
