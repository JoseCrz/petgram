/* eslint-disable */
import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { Context } from './Context'
import { GlobalStyle } from './styles/GlobalStyle'
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
    </Suspense>
  )
}
