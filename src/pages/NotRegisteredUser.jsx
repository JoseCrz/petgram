import React from 'react'
import Context from '../Context'

import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ isAuth, activateAuth }) => (
          <>
            <RegisterMutation>
              {
                (register) => {
                  const onSubmit = async ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }

                    try {
                      await register({ variables })
                      activateAuth()
                    } catch (error) {
                      console.log(error)
                    }
                  }

                  return (
                    <UserForm title='Sign up' onSubmit={onSubmit} />
                  )
                }
              }
            </RegisterMutation>

            <UserForm title='Sign in' onSubmit={activateAuth} />
          </>
        )
      }
    </Context.Consumer>
  )
}
