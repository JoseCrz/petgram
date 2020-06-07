import React from 'react'
import { Button } from './style'

export const ActionButton = ({ onClick, text, disabled, type }) => {
  return (
    <Button disabled={disabled} onClick={onClick} type={type}>{text}</Button>
  )
}
