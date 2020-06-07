import React, { useContext } from 'react'
import { Context } from '../Context'
import { Layout } from '../components/Layout'
import { ActionButton } from '../components/ActionButton'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='User' description='User settings'>
      <h1>User</h1>
      <ActionButton onClick={removeAuth} text='Sign out' />
    </Layout>
  )
}
