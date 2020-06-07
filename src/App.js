/* eslint-disable */
import React from 'react'
import { Router } from '@reach/router'

import Context from './Context'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Navbar } from './components/Navbar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        
        
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) => 
            isAuth
            ?
            <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
            :
            <Router>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
            </Router>
        }
      </Context.Consumer>
      <Navbar />
    </>
  )
}
