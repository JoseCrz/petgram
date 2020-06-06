import React, { createContext, useState } from 'react'
const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = {
    isAuth,
    activateAutu: () => setIsAuth(true)
  }

  return (
    <Context.Provider value={value}>
      {
        children
      }
    </Context.Provider>
  )
}

export default {
  Provider,
  Consume: Context.Consumer
}
