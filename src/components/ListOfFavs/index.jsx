import React from 'react'
import { Fav } from '../Fav'
import { FavsContainer } from './style'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <FavsContainer>
      {
        favs.map(fav => <Fav key={fav.id} {...fav} />)
      }
    </FavsContainer>
  )
}
