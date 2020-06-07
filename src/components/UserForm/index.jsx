import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'
import { ActionButton } from '../ActionButton'
import { Title, Form, Input, ErrorMessage } from './style'

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
      <ActionButton disabled={disabled} type='submit' text={title} />
      {
        error && <ErrorMessage>{error}</ErrorMessage>
      }
    </Form>
  )
}
