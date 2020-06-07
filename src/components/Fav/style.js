import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  width: 100%;
  height: calc(100vw/3);
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  border-radius: 5px;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover
`
