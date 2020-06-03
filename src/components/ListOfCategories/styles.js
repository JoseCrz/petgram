import styled from 'styled-components'
import { popIn } from '../../styles/Animations'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;

  &.fixed {
    ${popIn()}
    background: #FFF;
    border-radius: 25px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .25);
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    top: 0;
    transform: scale(.8);
    z-index: 9999;
  }
`
export const Item = styled.li`
  padding: 0 8px;
`
