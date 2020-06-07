import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'
import { Title, Form, Input, Button, ErrorMessage } from './style'

export const UserForm = ({ onSubmit, title, disabled, error }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleOnSubmit = event => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Title>{title}</Title>
      <Input disabled={disabled} type='text' placeholder='Email' {...email} />
      <Input disabled={disabled} type='password' placeholder='Password' {...password} />
      <Button disabled={disabled} type='submit'>{title}</Button>
      {
        error && <ErrorMessage>{error}</ErrorMessage>
      }
    </Form>
  )
}
