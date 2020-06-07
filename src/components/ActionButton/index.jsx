import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './style'

export const ActionButton = ({ onClick, text, disabled, type }) => {
  return (
    <Button disabled={disabled} onClick={onClick} type={type}>{text}</Button>
  )
}

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string
}
