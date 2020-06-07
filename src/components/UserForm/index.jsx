import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'
import { Title, Form, Input, Button } from './style'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <Form onSubmit={onSubmit}>
      <Title>{title}</Title>
      <Input type='text' placeholder='Email' {...email} />
      <Input type='password' placeholder='Password' {...password} />
      <Button type='submit'>{title}</Button>
    </Form>
  )
}
