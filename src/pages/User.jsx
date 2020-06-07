import React, { useContext } from 'react'
import { Context } from '../Context'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      <button onClick={removeAuth}>Sign out</button>
    </>
  )
}
