import React from 'react'
import { Nav, Link } from './style'
import { FaHome, FaHeart, FaUser } from 'react-icons/fa'

const SIZE = '28px'

export const Navbar = () => {
  return (
    <Nav>
      <Link to='/'><FaHome size={SIZE} /></Link>
      <Link to='/favs'><FaHeart size={SIZE} /></Link>
      <Link to='/user'><FaUser size={SIZE} /></Link>
    </Nav>
  )
}
