import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'
import { Title, Form, Input, Button } from './style'

export const UserForm = ({ onSubmit, title }) => {
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
      <Input type='text' placeholder='Email' {...email} />
      <Input type='password' placeholder='Password' {...password} />
      <Button type='submit'>{title}</Button>
    </Form>
  )
}
