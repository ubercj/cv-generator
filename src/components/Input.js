import React, { useState } from 'react'
import '../styles/Input.css'

const Input = (props) => {
  const [value, setValue] = useState('text goes here');

  const { name } = props;

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <label htmlFor={name}>
      {name} 
      <input
      id={name}
      type="text"
      className="Input"
      value={value}
      onChange={handleChange}
      />
    </label>
  )
}

export default Input;