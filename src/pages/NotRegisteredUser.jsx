import React from 'react'
import Context from '../Context'

import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ isAuth, activateAuth }) => <UserForm title='Sign up' onSubmit={activateAuth} />
      }
    </Context.Consumer>
  )
}
