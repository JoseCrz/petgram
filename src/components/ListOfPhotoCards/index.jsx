import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { photos } from '../../mocks/db.json'
export const ListOfPhotoCards = () => {
  return (
    <ul>
      {photos.map(photo => <li key={photo.id}> <PhotoCard {...photo} /> </li>)}
    </ul>
  )
}
