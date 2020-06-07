import React, { useContext } from 'react'
import { Context } from '../Context'

import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = async ({ email, password }) => {
              const input = { email, password }
              const variables = { input }

              try {
                const { data } = await register({ variables })
                const signupToken = data.signup
                activateAuth(signupToken)
              } catch (error) {
                console.log(error)
              }
            }

            const errorMessage = error && 'There\'s been a problem.'

            return (
              <UserForm title='Sign up' onSubmit={onSubmit} disabled={loading} error={errorMessage} />
            )
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = async ({ email, password }) => {
              const input = { email, password }
              const variables = { input }

              try {
                const { data } = await login({ variables })
                const loginToken = data.login
                activateAuth(loginToken)
              } catch (error) {
                console.log(error)
              }
            }

            const errorMessage = error && 'Invalid credentials'
            return (
              <UserForm title='Sign in' onSubmit={onSubmit} disabled={loading} error={errorMessage} />
            )
          }
        }
      </LoginMutation>
    </>
  )
}
