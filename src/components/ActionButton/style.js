import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 5px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  
  &[disabled] {
    opacity: .3;
  }
`
