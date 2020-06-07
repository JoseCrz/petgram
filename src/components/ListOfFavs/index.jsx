import React from 'react'
import PropTypes from 'prop-types'
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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
