import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  padding: 8px 0;
`

export const Form = styled.form`
  padding: 16px;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;

  &[disabled] {
    opacity: .3;
  }
`

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
export const ErrorMessage = styled.p`
  color: red;
  margin-top: 12px;
`
