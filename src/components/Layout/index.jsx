import React from 'react'
import { Helmet } from 'react-helmet'
import { Logo } from '../Logo'

export const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title> 🐱Petgram🐶 | {title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <div>
        <Logo />
        {children}
      </div>
    </>
  )
}
