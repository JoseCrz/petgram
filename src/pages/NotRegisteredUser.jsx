import React from 'react'
import Context from '../Context'

import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ isAuth, activateAuth }) => (
          <>
            <UserForm title='Sign up' onSubmit={activateAuth} />
            <UserForm title='Sign in' onSubmit={activateAuth} />
          </>
        )
      }
    </Context.Consumer>
  )
}
