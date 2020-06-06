import React from 'react'
import Context from '../Context'
export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ isAuth, activateAuth }) => {
          return (
            <form onSubmit={activateAuth}>
              <button type='submit'>Log in</button>
            </form>
          )
        }
      }
    </Context.Consumer>
  )
}
