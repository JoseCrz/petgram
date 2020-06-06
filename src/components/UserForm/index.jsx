import React, { useState } from 'react'

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange
  }
}

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Email' {...email} />
      <input type='password' placeholder='Password' {...password} />
      <button type='submit'>Log in</button>
    </form>
  )
}
