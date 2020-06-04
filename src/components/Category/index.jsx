import React from 'react'
import { Anchor, Image } from './styles'
import defaultImage from '../../static/img/loading.gif'

export const Category = ({ cover = defaultImage, path, emoji = '🔮' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
