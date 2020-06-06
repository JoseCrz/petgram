import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  height: 50px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999999;
`

export const Link = styled(LinkRouter)`
  height: 100%;
  width: 100%;
  color: #888;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`
