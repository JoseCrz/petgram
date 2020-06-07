import React, { useContext } from 'react'
import { Context } from '../Context'
import { ActionButton } from '../components/ActionButton'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      <ActionButton onClick={removeAuth} text='Sign out' />
    </>
  )
}
